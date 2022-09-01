interface IPlane {
  x: number;
  y: number;
  speed: number;
  moveUp: () => void;
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 1,
}

export function setupPlane(plane, options) : IPlane {
  Object.assign(plane, defaultOptions, options);

  plane.moveUp = function () {
    plane.y -= plane.speed;
  }

  plane.moveDown = function () {
    plane.y += plane.speed;
  }

  plane.moveLeft = function () {
    plane.x -= plane.speed;
  }

  plane.moveRight = function () {
    plane.x += plane.speed;
  }

  return plane;
}
