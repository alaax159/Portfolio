export type WorkKind = 'project' | 'coursework';

/**
 * Splits a list of work entries into self-directed Projects and graded Coursework,
 * preserving the order each appears in the source list.
 */
export function partitionWork<T extends { kind: WorkKind }>(
    entries: readonly T[]
): { projects: T[]; coursework: T[] } {
    return {
        projects: entries.filter((e) => e.kind === 'project'),
        coursework: entries.filter((e) => e.kind === 'coursework'),
    };
}
