import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { User, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-background border-b rounded-lg shadow-sm mx-4 mt-4 mb-6 ">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left side - Project title */}
                    <div className="flex items-center">
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            <h2 className="text-2xl font-bold text-foreground">Orion Hire</h2>
                        </Link>
                    </div>

                    {/* Right side - Navigation and Login */}
                    <div className="flex items-center space-x-6">
                        {/* Navigation links */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                to="/jobs"
                                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                            >
                                Jobs
                            </Link>
                            <Link
                                to="/companies"
                                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                            >
                                Companies
                            </Link>
                            <Link
                                to="/about"
                                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                            >
                                About
                            </Link>
                        </div>

                        {/* Login button */}
                        <Button asChild variant="default" size="sm" className="flex items-center space-x-2">
                            <Link to="/login">
                                <User size={16} />
                                <span>Login</span>
                            </Link>
                        </Button>

                        {/* Mobile menu button */}
                        <Button variant="ghost" size="sm" className="md:hidden">
                            <Menu size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
