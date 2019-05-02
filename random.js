export default function random (min=1, max=3) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

