export interface ITask {
    id: number;
    typeId: number;
    priorityId: number;
    assigneeId: number;
    title: string;
    description: string;
    estimation: string;
    createdAt: Date;
    updatedAt: Date;
}
