type Mode = Record<string, string| boolean>

export function classNames(cls: string, mode: Mode = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
