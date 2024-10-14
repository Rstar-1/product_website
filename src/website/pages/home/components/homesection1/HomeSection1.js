import React from 'react'
import DoctorBanner from './components/DoctorBanner'
import DoctorFeature from './components/DoctorFeature'
import DoctorLeftAbout from './components/DoctorLeftAbout'
import DoctorPatch from './components/DoctorPatch'
import DoctorRightAbout from './components/DoctorRightAbout'
import DoctorTeam from './components/DoctorTeam'
import DoctorTestimonial from './components/DoctorTestimonial'

const HomeSection1 = () => {
  return (
    <div>
      <DoctorBanner />
      <DoctorFeature />
      <DoctorLeftAbout />
      <DoctorPatch />
      <DoctorRightAbout />
      <DoctorTeam />
      <DoctorTestimonial />
    </div>
  )
}

export default HomeSection1
