const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        long: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

// this is how we would destructure the age variable from the profile object
// because of this, we have to lay out the structure of profile to specify the
// property in the object
const { age }: { age: number } = profile;

const {
    coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
