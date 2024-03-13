import React, { useRef, useEffect } from 'react';

type Circle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
};

export default function IntroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let circles: Circle[] = [];

  // 원 객체 생성
  const Circles = (ctx: CanvasRenderingContext2D) => {
    circles = [];
    for (let i = 0; i < 8; i += 1) {
      // 수정: i + 1을 i++로 변경
      const radius = Math.random() * 50 + 30;
      const x = Math.random() * ctx.canvas.width - radius * 2 + radius;
      const y = Math.random() * ctx.canvas.height - radius * 2 + radius;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      circles.push({ x, y, dx, dy, radius });
    }
  };

  const drawCircle = (ctx: CanvasRenderingContext2D, circle: Circle) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = '#aaaaaa';
    ctx.lineWidth = 2;
    ctx.stroke(); // 테두리 그리기
    ctx.closePath();
  };

  // 애니메이션 업데이트 함수
  const update = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // 캔버스 클리어

    for (let i = 0; i < circles.length; i += 1) {
      const circle = circles[i];

      // 화면 경계에 닿으면 방향 전환
      if (circle.x + circle.radius > ctx.canvas.width || circle.x - circle.radius < 0) {
        circle.dx = -circle.dx;
      }
      if (circle.y + circle.radius > ctx.canvas.height || circle.y - circle.radius < 0) {
        circle.dy = -circle.dy;
      }

      // 위치 업데이트
      circle.x += circle.dx;
      circle.y += circle.dy;

      drawCircle(ctx, circle);
    }

    requestAnimationFrame(() => update(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current!;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    Circles(ctx!);
    update(ctx!);

    const resizeListener = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      Circles(ctx!);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute left-0 top-0 -z-1" />;
}
