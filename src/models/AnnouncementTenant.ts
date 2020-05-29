export class AnnouncementTenant{
    constructor(
        public idTenant: Number,
        public title: String,
        public type: String,
        public region: String,
        public maxValue: Number, 
        public entryDate: Date,
        public genderTenant: String,
        public descriptionTenant: String,
        public smokerTenant: Boolean,
        public phoneTenant: Number,
        public garageTenant: Boolean,
        public haveAnimal: Boolean,
        public animalTenant: String
    ){

    }
}