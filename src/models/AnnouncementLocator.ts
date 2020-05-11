export class AnnouncementLocator{
    constructor(
        public idLocator: Number,
        public title: String,
        public type: String,
        public adressLocator: String,
        public region: String,
        public value: Number,
        public entryDate: Date,
        public genderLocator: String,
        public descriptionLocator: String,
        public smokerLocator: Boolean,
        public phoneLocator: Number,
        public garageLocator: Boolean,
        public animalLocator: String,
    ){

    }
}