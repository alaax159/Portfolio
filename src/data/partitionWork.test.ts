import { describe, it, expect } from 'vitest';
import { partitionWork } from './partitionWork';

describe('partitionWork', () => {
    it('separates self-directed projects from graded coursework, preserving order', () => {
        const entries = [
            { title: 'OffPI', kind: 'project' as const },
            { title: 'ML Assignment 3', kind: 'coursework' as const },
            { title: 'AI Legal Aid for Palestine', kind: 'project' as const },
            { title: 'Dog Breed Classifier', kind: 'coursework' as const },
        ];

        const { projects, coursework } = partitionWork(entries);

        expect(projects.map((e) => e.title)).toEqual([
            'OffPI',
            'AI Legal Aid for Palestine',
        ]);
        expect(coursework.map((e) => e.title)).toEqual([
            'ML Assignment 3',
            'Dog Breed Classifier',
        ]);
    });
});
