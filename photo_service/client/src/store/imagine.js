import {makeAutoObservable} from "mobx";
import img1 from "../static/1.jpg";
import img2 from "../static/2.jpg";
import img3 from "../static/3.jpg";
import img4 from "../static/4.jpg";
import img5 from "../static/DSC_8914.jpg";
import img6 from "../static/DSC_8928.jpg";
import img7 from "../static/DSC_8992.jpg";
import img8 from "../static/DSC_8996.jpg";
import img9 from "../static/DSC_9032.jpg";
import img10 from "../static/DSC_8911.jpg";
import img11 from "../static/DSC_9029.jpg";
import img12 from "../static/DSC_9027.jpg";

class Imagine {

    pictures = [
        {
            id: 1,
            img: img1,
            description: 'Best photo in the World!',
            createdDate: Date.now(),
        },
        {
            id: 2,
            img: img2,
            description: 'Best photo in the Universe!',
            createdDate: Date.now(),
        },
        {
            id: 3,
            img: img3,
            description: 'I like it!',
            createdDate: Date.now(),
        },
        {
            id: 4,
            img: img4,
            description: 'This is Amazing!',
            createdDate: Date.now(),
        },
        {
            id: 5,
            img: img5,
            description: 'This is Amazing!',
            createdDate: Date.now(),
        },
        {
            id: 6,
            img: img6,
            description: 'Greates!',
            createdDate: Date.now(),
        },
        {
            id: 7,
            img: img7,
            description: 'Important photo!',
            createdDate: Date.now(),
        },
        {
            id: 8,
            img: img8,
            description: 'My favorite!',
            createdDate: Date.now(),
        },
        {
            id: 9,
            img: img9,
            description: 'Coolest!',
            createdDate: Date.now(),
        },
        {
            id: 10,
            img: img10,
            description: 'Masterpeace!',
            createdDate: Date.now(),
        },
        {
            id: 11,
            img: img11,
            description: 'Cool!',
            createdDate: Date.now(),
        },
        {
            id: 12,
            img: img12,
            description: 'Wow!',
            createdDate: Date.now(),
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    createImagine(picture) {
        this.pictures.push(picture)
    }

    deleteImagine(id) {
        this.pictures = this.pictures.filter((item)=> item.id !== id)
    }

    editImagine(id, description, img) {
        const imagine = this.pictures.find((item) => item.id == id)
        imagine.description = description
        imagine.img = img
        imagine.createdDate = Date.now()
        this.pictures.map((item) => item.id !== id ? item : imagine)
    }

    downloadImagine(id) {
        const imagine = this.pictures.find((item) => item.id == id)

    }


}

export default new Imagine()
