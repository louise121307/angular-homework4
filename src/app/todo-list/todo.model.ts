export class Todo {

  private index = 0;
  private title = '';
  private completed = false;

  constructor(index: number, title: string, completed?: boolean) {
    this.index = index;
    this.title = title || '';
    if (typeof completed === 'boolean') {
      this.completed = completed;
    }
  }

  getIndex(): number {
    return this.index;
  }

  getTitle(): string {
    return this.title;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  getStatus(): string {
    if (this.completed) { return 'DONE'; } else { return 'OPEN'; }
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setCompleted(completed: boolean): void {
    this.completed = completed;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

}
