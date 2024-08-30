import React from 'react';
import { cn } from "@/lib/utils";

interface ContainerProps {
    className?: string;
    id?: string;
    children?: React.ReactNode;
}

function Container({ className, id, children, ...props }: ContainerProps) {
    return (
        <section className={cn("col-span-4 md:py-16 py-12 md:col-span-8", className)} id={id} {...props}>
            {children}
        </section>
    );
}

export default Container;