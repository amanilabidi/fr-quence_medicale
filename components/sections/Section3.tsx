
import DecryptageClinique from "./section3parts/DecryptageClinique";
import Congres from "./section3parts/Congres";
import ParcoursSante from "./section3parts/ParcoursSante";
import ProposNewsletter from "./section3parts/ProposNwesletter";
import EducationPartenaire from "./section3parts/EducationPartenaire";
import Section3container from "./section3parts/Section3container";

export default function Section3() {
    return (
        <>
          <Section3container />  
          <DecryptageClinique />
          <Congres />
          <ParcoursSante />
          <EducationPartenaire />
        </>
    )
}