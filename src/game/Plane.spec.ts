import { describe, it, expect } from 'vitest';
import { setupPlane } from './Plane';

describe('plane move', () => {
  it('move up', () => {
    const plane = setupPlane({}, { y: 1, speed: 1 });
    plane.moveUp();
    expect(plane.y).toBe(0);
  })

  it('move down', () => {
    const plane = setupPlane({}, { y: 0, speed: 1 });
  plane.moveDown();
    expect(plane.y).toBe(1);
  })

  it('move left', () => {
    const plane = setupPlane({}, { x: 1, speed: 1 });
    plane.moveLeft();
    expect(plane.x).toBe(0);
  })

  it('move right', () => {
    const plane = setupPlane({}, { x: 0, speed: 1 });
    plane.moveRight();
    expect(plane.x).toBe(1);
  })
 })
