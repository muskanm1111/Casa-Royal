export const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <a href="/" className="text-lg font-bold text-gray-800">Logo</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="/" className="text-gray-800">Home</a>
                        <a href="/about" className="text-gray-800">About</a>
                        <a href="/contact" className="text-gray-800">Contact</a>
                    </div>
                </div>
            </div>
        </header>
    )
}