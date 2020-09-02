export default function Sanitize(input: string): string {
  return input.replace(/([^a-zA-Z_-])/gs, '');
}