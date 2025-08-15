const canvasP = document.getElementById('particles');
      const ctx = canvasP.getContext('2d');
      canvasP.width = window.innerWidth;
      canvasP.height = window.innerHeight;

      let particles = [];
      for (let i = 0; i < 50; i++) {
         particles.push({
            x: Math.random() * canvasP.width,
            y: Math.random() * canvasP.height,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
         });
      }

      function drawParticles() {
         ctx.clearRect(0, 0, canvasP.width, canvasP.height);
         ctx.fillStyle = 'rgba(255,255,255,0.2)';
         particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > canvasP.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvasP.height) p.dy *= -1;
         });
         requestAnimationFrame(drawParticles);
      }
      drawParticles();