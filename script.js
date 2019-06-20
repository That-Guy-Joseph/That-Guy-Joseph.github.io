var pacman = new TimelineMax({onComplete:function(){this.restart()}});
pacman.to(".pacman", 0, {top: 6});
pacman.to(".pacman", 0.05, {top: 8});
pacman.to(".pacman", 0.05, {top: 12});
pacman.to(".pacman", 0.05, {top: 20});
pacman.to(".pacman", 0.05, {top: 38});
pacman.to(".pacman", 0.05, {top: 72});
pacman.to(".pacman", 0.05, {top: 100});
pacman.to(".pacman", 0.05, {top: 152});
pacman.to(".pacman", 0.05, {top: 154, height: 46, width: 54});
pacman.to(".pacman", 0.05, {top: 176, height: 24, width: 72});
pacman.to(".pacman", 0.05, {top: 162, height: 38, width: 58});
pacman.to(".pacman", 0.05, {top: 138, height: 48, width: 55});
pacman.to(".pacman", 0.05, {top: 110, height: 50, width: 50});
pacman.to(".pacman", 0.05, {top: 72});
pacman.to(".pacman", 0.05, {top: 38});
pacman.to(".pacman", 0.05, {top: 20});
pacman.to(".pacman", 0.05, {top: 12});
pacman.to(".pacman", 0.05, {top: 8});
pacman.to(".pacman", 0.10, {top: 5});


var pacmanPart1 = new TimelineMax({onComplete:function(){this.restart()}});
pacmanPart1.fromTo(".pacman-part1", 0.2, {ease: Power0.easeNone, rotation: -30, transformOrigin:"50% 50%"}, {ease: Power0.easeNone, rotation: 0, transformOrigin:"50% 50%"})
pacmanPart1.fromTo(".pacman-part1", 0.2, {ease: Power0.easeNone, rotation: 0, transformOrigin:"50% 50%"}, {ease: Power0.easeNone, rotation: -30, transformOrigin:"50% 50%", delay: 0.55});

var pacmanPart2 = new TimelineMax({onComplete:function(){this.restart()}});
pacmanPart2.fromTo(".pacman-part2", 0.2, {ease: Power0.easeNone, rotation: 30, transformOrigin:"50% 50%"}, {ease: Power0.easeNone, rotation: 0, transformOrigin:"50% 50%"});
pacmanPart2.fromTo(".pacman-part2", 0.2, {ease: Power0.easeNone, rotation: 0, transformOrigin:"50% 50%"}, {ease: Power0.easeNone, rotation: 30, transformOrigin:"50% 50%", delay: 0.55});


var tree1 = new TimelineMax({onComplete:function(){this.restart()}});
tree1.fromTo(".tree-1", 2, {ease: Power0.easeNone, right: -50}, {ease: Power0.easeNone, right: 400});

var tree2 = new TimelineMax({onComplete:function(){this.restart()}});
tree2.fromTo(".tree-2", 2.5, {ease: Power0.easeNone, right: -50}, {ease: Power0.easeNone, right: 400});

var tree3 = new TimelineMax({onComplete:function(){this.restart()}});
tree3.fromTo(".tree-3", 3, {ease: Power0.easeNone, right: -50}, {ease: Power0.easeNone, right: 400});

var point = new TimelineMax({onComplete:function(){this.restart()}});
point.fromTo(".point", 0.75, {ease: Power0.easeNone, right: -150}, {ease: Power0.easeNone, right: 150, delay: 0.2});