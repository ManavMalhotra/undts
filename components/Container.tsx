import React from 'react'
import { cn } from "@/lib/utils"

// @ts-ignore
function Container({ className, children, ...props }) {
    return (
        <section className={cn("col-span-4 py-24 md:col-span-8", className)}>
            {children}
        </section>
    )
}

export default Container