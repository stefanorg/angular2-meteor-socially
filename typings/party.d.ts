declare var Fake: {
    sentence(words: number): string;
    fromArray(customArray: string[]): string;
}

interface RSVP {
    userId: string;
    response: string;
}

interface Party {
    _id?: string;
    name: string;
    description?: string;
    location: {
        name: string;
        lat?: number;
        lng?: number;
    };
    owner?: string;
    public: boolean;
    invited?: Array<string>;
    rsvps?: Array<RSVP>;
}