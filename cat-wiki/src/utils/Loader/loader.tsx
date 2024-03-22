import './loader.css'

export default function Loader() {
  return (
    <div className="fixed inset-0  grid place-content-center backdrop-blur-md z-50">
      <div className="lds-dual-ring"></div>
    </div>
  );
}
