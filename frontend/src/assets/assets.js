import doctor1 from './doctor1.png'
import doctor2 from './doctor2.png'
import doctor3 from './doctor3.png'
import doctor4 from './doctor4.png'
import doctor5 from './doctor5.png'
import doctor6 from './doctor6.png'
import doctor7 from './doctor7.png'
import doctor8 from './doctor8.png'
import doctor9 from './doctor9.png'
import doctor10 from './doctor10.png'
import doctor11 from './doctor11.png'
import doctor12 from './doctor12.png'
import doctor15 from './doctor15.png'
import logo1 from './logo1.jpg';
import Gastroenterologist from './gastrologist.jpg'
import Darmatologist from './Darmatologist.jpg'
import Gynecologist from './gynecologist.jpg'
import Neurologist from './neurologist.jpg'
import Pedestrician from './pedetricians.jpg'
import Physician from './Physician.jpg'
import profile_pic from './profile_pic.jpeg'
import dropdown_icon from './dropdown_icon.png'
import group_profiles from './group_profiles.jpg'
import arrow_icon from  './arrow_icon.jpg'
import header_img from './header_img.jpg'
import appointment_img from './appointment_img.jpg'
// import doctor11 from './doctor.png'
export const assets = {
    doctor1,
    doctor2,
    doctor3,
    doctor4,
    doctor5,
    doctor6,
    doctor7,
    doctor8,
    doctor9,
    doctor10,
    doctor11,
    doctor12,
    doctor15,
    logo1,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    appointment_img
}
export const specialityData =[
    {
        speciality: 'General Physician',
        image: Physician
    },
    {
        speciality: 'Gynecologist',
        image:  Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Darmatologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
    {
        speciality: 'Neurologist' ,
        image: Neurologist
    },
    {
        speciality: 'Pedestrician' ,
        image: Pedestrician
    }

]
export const doctors = [

{
    _id: 'doc1',
    name: 'Dr. Naresh Trehan ',
    image: doctor1,
    speciality: 'General Physician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc2',
    name: 'Dr. Randeep Guleria',
    image: doctor2,
    speciality: 'Gynecologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc3',
    name: 'Dr. Gagandeep Kang',
    image: doctor3,
    speciality: 'Neurologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc4',
    name: 'Dr. Ashok Seth',
    image: doctor4,
    speciality: 'Physician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc5',
    name: ' Dr. Manisha Hariawala',
    image: doctor5,
    speciality: 'Gynecologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc6',
    name: ' Dr. K. K. Aggarwal',
    image: doctor6,
    speciality: 'Dermatologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc7',
    name: '  Dr. P. Raghu Ram',
    image: doctor7,
    speciality: 'Cardiologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc8',
    name: 'Dr. Shashi Tharoor',
    image: doctor8,
    speciality: 'Pedestrician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc9',
    name: ' Dr. Ajay Kumar',
    image: doctor9,
    speciality: 'Pedestrician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc10',
    name: 'Dr. Treasa Joseph',
    image: doctor10,
    speciality: 'Cardiologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc11',
    name: ' Dr. Mahesh Sharma',
    image: doctor11,
    speciality: ' General Physician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc12',
    name: 'Dr. Rajendra Prasad',
    image: doctor12,
    speciality: 'Pedestrician',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},
{
    _id: 'doc15',
    name: 'Dr. S. Rajeshwari',
    image: doctor15,
    speciality: 'Gynecologist',
    degree:'MBBS',
    experience: '4 Year',
    about: 'Lorem ipsum dolor sit amet',
    fees: 60,
    address:{
        line1: 'Lorem ipsum dolor sit amet consectetur',
        line2: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
}
},



    
    


]