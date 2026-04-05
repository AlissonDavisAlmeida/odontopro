import Link from "next/link"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 right-0 z-999 py-4 px-6 bg-white shadow-md"
        >
            <div
                className="flex items-center justify-between container mx-auto"
            >
                <Link
                    className="text-3xl font-bold text-zinc-900"
                    href={`/`}>
                    Odonto<span className="text-emerald-500">PRO</span>
                </Link>

                <nav
                    className="hidden md:flex items-center"
                >
                    <a href="">Profissionais</a>
                </nav>

                <Sheet >
                    <SheetTrigger
                        className="md:hidden"
                        asChild
                    >
                        <Button
                            className="text-black hover:bg-blue-300 cursor-pointer"
                        >
                            <Menu size={20} className="text-white" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-60 sm:w-75 z-999 px-4">
                        <SheetHeader>
                            <SheetTitle>
                                Menu
                            </SheetTitle>
                        </SheetHeader>
                        <SheetDescription>
                            Veja nossos links
                        </SheetDescription>
                        <nav
                            className="flex flex-col items-start gap-4 mt-4"
                        >
                            <a href="">Profissionais</a>
                        </nav>

                        <SheetFooter>
                            <SheetClose asChild>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                >
                                    Fechar
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    )
}