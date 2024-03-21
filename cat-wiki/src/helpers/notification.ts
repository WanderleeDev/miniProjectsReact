export default function requestNotification(): void {
  if (typeof window !== 'undefined' && 'Notification' in window) {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Welcome to CatWiki 🐱', {
            tag: "greetings",
            body:"Everything You Want to Know About Cats"
          });
        }
      })
  }
}
