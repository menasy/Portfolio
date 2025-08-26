import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Error caught by boundary:', error);
		console.error('Error info:', errorInfo);
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
					<div className="max-w-md mx-auto text-center p-8">
						<div className="mb-6">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
							</div>
							<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
								Bir Hata Oluştu
							</h2>
							<p className="text-slate-600 dark:text-slate-400">
								Uygulama yüklenirken bir sorun yaşandı.
							</p>
						</div>

						<div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-6 text-left">
							<h3 className="font-medium text-sm text-slate-900 dark:text-white mb-2">Hata Detayları:</h3>
							<div className="text-xs text-red-600 dark:text-red-400 font-mono break-all">
								{this.state.error && this.state.error.toString()}
							</div>
							{this.state.errorInfo && (
								<details className="mt-2">
									<summary className="text-xs text-slate-500 cursor-pointer">Stack Trace</summary>
									<pre className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">
										{this.state.errorInfo.componentStack}
									</pre>
								</details>
							)}
						</div>

						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							Sayfayı Yenile
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
