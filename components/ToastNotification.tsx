interface ToastNotificationProps {
  message: string | null;
}

export default function ToastNotification({ message }: ToastNotificationProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary font-label-mono text-xs px-4 py-3 rounded-DEFAULT shadow-lg flex items-center gap-2 transition-all animate-bounce">
      <span className="material-symbols-outlined text-sm">check_circle</span>
      {message}
    </div>
  );
}
