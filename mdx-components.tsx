import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CopyIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import "@/styles/github.css";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		wrapper: ({ children }) => (<section className="container my-20">{children}</section>),
		h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h1
				className={cn(
					"mt-2 scroll-m-20 font-bold font-heading text-4xl",
					className,
				)}
				{...props}
			/>
		),
		h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h2
				className={cn(
					"mt-12 scroll-m-20 border-b pb-2 font-heading font-semibold text-2xl tracking-tight first:mt-0",
					className,
				)}
				{...props}
			/>
		),
		h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h3
				className={cn(
					"mt-8 scroll-m-20 font-heading font-semibold text-xl tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h4
				className={cn(
					"mt-8 scroll-m-20 font-heading font-semibold text-lg tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h5
				className={cn(
					"mt-8 scroll-m-20 font-semibold text-lg tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h6
				className={cn(
					"mt-8 scroll-m-20 font-semibold text-base tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		a: ({
			className,
			href,
			...props
		}: React.HTMLAttributes<HTMLAnchorElement> & { href?: string }) => (
			<Link
				className={cn(
					"font-medium underline underline-offset-4 hover:opacity-60",
					className,
				)}
				href={href ?? ""}
				{...props}
			/>
		),
		input: ({
			className,
			// @ts-ignore
			type,
			itemType,
			...props
		}: React.HTMLAttributes<HTMLInputElement>) => {
			if (type === "checkbox") {
				// @ts-ignore
				return <Checkbox {...props} />;
			}

			return (
				<Input
					className={cn("font-medium", className)}
					type={itemType}
					{...props}
				/>
			);
		},
		p: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLParagraphElement>) => (
			<p
				className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
				{...props}
			/>
		),
		ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
			<ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
		),
		ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
			<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
		),
		li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
			<li className={cn("mt-2", className)} {...props} />
		),
		blockquote: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLElement>) => (
			<blockquote
				className={cn("hljs mt-6 border-l-2 bg-opacity-5 pl-6 italic", className)}
				{...props}
			/>
		),
		img: ({
			className,
			...props
		}: React.ImgHTMLAttributes<HTMLImageElement>) => (
			// biome-ignore lint/a11y/useAltText: <explanation>
			<img className={cn("rounded-md", className)} {...props} />
		),
		hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
			<hr className="my-4 md:my-8" {...props} />
		),
		table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
			<Card className="hljs border-0">
				<Table {...props} />
			</Card>
		),
		tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
			<TableRow {...props} />
		),
		thead: ({ ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
			<TableHeader {...props} />
		),
		th: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
			<TableHead {...props} />
		),
		td: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
			<TableCell {...props} />
		),
		tbody: ({ ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
			<TableBody {...props} />
		),
		pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
			return (
				<Card className="hljs relative my-4 border-0">
					<pre
						className={cn(
							"max-h-[650px] overflow-x-auto p-4",
							className,
						)}
						{...props}
					/>
					<Button size={"icon"} className={"absolute top-2 right-2"}>
						<CopyIcon />
					</Button>
				</Card>
			);
		},
		code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
			<code
				className={cn("relative font-mono text-sm", className)}
				{...props}
			/>
		),
		...components,
	};
}
