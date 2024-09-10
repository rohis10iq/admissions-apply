import { FC, memo, ReactNode } from "react";

const Container: FC<{ children: ReactNode, className?: string }> = memo(({ children, className }) => {
    return <div className={`mx-auto px-3 w-full sm:max-w-[620px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1220px] 2xl:max-w-[1440px] ${className}`}>{children}</div>;
});

export default Container;