
import React from 'react'
import Scrolltotop from './scrolltotop';
import Main from '../core/Main';
import Homepage from '../components/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutpage from '../components/Aboutpage/Aboutpage';
import AimScopepage from '../components/AimScopepage/AimScopepage';
import Editorialpage from '../components/Editorialpage/Editorialpage';
import Issuepage from '../components/Issuepage/Issuepage';
import Authorguidelinepage from '../components/Authorguidelinepage/Authorguidelinepage';
import Copyrightpage from '../components/Copyrightpage/Copyrightpage';
import Peerreviewpage from '../components/Peerreviewpage/Peerreviewpage';
import Publicationethicspage from '../components/Publicationethicspage/Publicationethicspage';
import Abstractindexingpage from '../components/Abstractindexingpage/Abstractindexingpage';
import Articleprocessingpage from '../components/Articleprocessingpage/Articleprocessingpage';
import Plagiarismpage from '../components/Plagiarismpage/Plagiarismpage';
import Malpracticepage from '../components/Malpracticepage/Malpracticepage';
import Correctionpage from '../components/Correctionpage/Correctionpage';
import Publicationightspage from '../components/Publicationightspage/Publicationightspage';
import Contactpage from '../components/Contactpage/Contactpage';

export default function Approuter() {
    return (
        <BrowserRouter>
            <Scrolltotop />
            <Routes>

                <Route element={<Main />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/aboutus" element={<Aboutpage />} />
                    <Route path="/aimscope" element={<AimScopepage />} />
                    <Route path="/editorial" element={<Editorialpage />} />
                    <Route path="/issues" element={<Issuepage />} />
                    <Route path="/authorguidelinespage" element={<Authorguidelinepage />} />
                    <Route path="/copyrightformpage" element={<Copyrightpage />} />
                    <Route path="/peer" element={<Peerreviewpage />} />
                    <Route path="/publicationethicspage" element={<Publicationethicspage />} />
                    <Route path="/abstractindexing" element={<Abstractindexingpage />} />
                    <Route path="/articleprocessingpage" element={<Articleprocessingpage />} />
                    <Route path="/plagiarismpage" element={<Plagiarismpage />} />
                    <Route path="/malpracticepage" element={<Malpracticepage />} />
                    <Route path="/correctionpage" element={<Correctionpage/>} />
                    <Route path="/publicationrightspage" element={<Publicationightspage/>} />
                    <Route path="/contactuspage" element={<Contactpage/>} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
