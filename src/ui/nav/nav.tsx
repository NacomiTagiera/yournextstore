import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";

const links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Apparel",
		href: "/category/apparel",
	},
	{
		label: "Accessories",
		href: "/category/accessories",
	},
	{
		label: "Digital",
		href: "/category/digital",
	},
];

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-md nav-border-reveal">
			<div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
				<YnsLink href="/">
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Your Next Store</SeoH1>
				</YnsLink>

				<div className="sm:mr-auto">
					<NavMenu links={links} />
				</div>

				<div className="flex items-center justify-start gap-x-6">
					<SearchNav />
					<CartSummaryNav />
				</div>
			</div>
		</header>
	);
};
