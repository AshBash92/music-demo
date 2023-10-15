export interface ContextDataInterface {
    apiKey: string;
}

export type ContextDataType = {
    context?: ContextDataInterface;
    setContext?: (context: ContextDataInterface) => void;
}