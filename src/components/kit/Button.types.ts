export type ButtonType = {
    action: Function,
    text: string,
    mood?: 'neutral' | 'primary' | 'secondary',
    name: string,
}