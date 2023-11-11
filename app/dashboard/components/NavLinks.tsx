"use client";
import React from "react";
import { PersonIcon, CrumpledPaperIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLinks() {
	const pathname = usePathname();

	const links = [
		{
			href: "/dashboard/members",
			text: "Members",
			Icon: PersonIcon,
		},
		{
			href: "/dashboard/todo",
			text: "Todo",
			Icon: CrumpledPaperIcon,
		},
	];

	return (
		<div className="space-y-5">
			{links.map((link, index) => {
				const Icon = link.Icon;
				return (
					<Link
						href={link.href}
						key={index}
						className={cn(
							"flex items-center gap-2 rounded-sm p-2",
							{
								"border  ring-2": pathname === link.href,
							}
						)}
					>
						<Icon />
						{link.text}
					</Link>
				);
			})}
		</div>
	);
}
