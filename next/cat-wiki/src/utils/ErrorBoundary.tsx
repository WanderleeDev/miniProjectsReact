'use client'
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Actualiza el estado para mostrar la interfaz de usuario de respaldo en el próximo renderizado.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Puedes usar tu propio servicio de registro de errores aquí
    console.log({ error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de usuario personalizada para los errores
      return (
        <div className="border-red-400 border-2 text-red-600 flex justify-between mb-4 bg-red-100 py-4 px-4 items-center flex-wrap">
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Devuelve los componentes hijos en caso de que no haya errores
    return this.props.children;
  }
}

export default ErrorBoundary;
