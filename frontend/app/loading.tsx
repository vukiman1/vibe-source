"use client";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-100 h-1 bg-muted overflow-hidden">
      <div className="h-full bg-blue-600 animate-progress origin-left"></div>
    </div>
  );
}
