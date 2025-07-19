import './App.css'
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function App() {
    return (
        <div className="flex justify-center flex-row p-4 w-full">
            <div className='px-4 lg:px-20 mt-15 py-16 flex flex-col'>
                <h1 className='text-4xl'>Orion Hire</h1>
                <p className='text-lg font-thin max-w-150 mt-4'>
                    A platform for Businesses to filter through many applications and find their <span
                        className='underline font-medium'>Best Fit</span>.
                </p>

                {/* Get started button */}
                <Button asChild variant="default" size="sm" className="flex items-center space-x-2 w-40 mt-8">
                    <Link to="/login">
                        <span>Get Started</span>
                    </Link>
                </Button>

            </div>
            {/* TODO: fix the image */}
            {/* <img */}
            {/*     src='https://images.unsplash.com/vector-1750437268153-846931879ff3' */}
            {/*     aria-label='People sitting together' */}
            {/*     className='hidden lg:block max-h-[1470px]' */}
            {/* /> */}
        </div>
    )
}
