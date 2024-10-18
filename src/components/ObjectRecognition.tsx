import React, { useState, useRef, useEffect } from 'react';

const ObjectRecognition: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (isDragging) {
          setPosition({
            x: Math.max(0, Math.min(clientX - rect.left - size.width / 2, rect.width - size.width)),
            y: Math.max(0, Math.min(clientY - rect.top - size.height / 2, rect.height - size.height)),
          });
        } else if (isResizing) {
          const newWidth = Math.max(50, Math.min(clientX - rect.left - position.x, rect.width - position.x));
          const newHeight = Math.max(50, Math.min(clientY - rect.top - position.y, rect.height - position.y));
          setSize({ width: newWidth, height: newHeight });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const handleEnd = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, isResizing, position, size]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent, action: 'drag' | 'resize') => {
    e.preventDefault();
    if (action === 'drag') {
      setIsDragging(true);
    } else {
      setIsResizing(true);
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        ref={boxRef}
        className="absolute border-2 border-yellow-400 rounded-lg cursor-move"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        onMouseDown={(e) => handleStart(e, 'drag')}
        onTouchStart={(e) => handleStart(e, 'drag')}
      >
        <div
          className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-400 rounded-full cursor-se-resize"
          onMouseDown={(e) => handleStart(e, 'resize')}
          onTouchStart={(e) => handleStart(e, 'resize')}
        />
      </div>
    </div>
  );
};

export default ObjectRecognition;