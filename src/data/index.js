import AssignmentIcon from '../assets/icons/assignment.inline.svg';
import PeopleIcon from '../assets/icons/group.inline.svg';
import SchoolIcon from '../assets/icons/school.inline.svg';
import ThumbIcon from '../assets/icons/thumb_up.inline.svg';
import PasteIcon from '../assets/icons/paste.inline.svg';
import WorkIcon from '../assets/icons/work.inline.svg';

export const companyName = 'conceptive finance';
export const welcomeText = 'Usługi księgowe, kadrowo-płacowe, doradztwo';

export const aboutText =
  'Jesteśmy grupą wykwalifikowanych księgowych, którzy zadbają o spokój w finansach Twojej firmy. Kładziemy nacisk na profesjonalizm oraz jakość świadczonych przez nas usług. Pomagamy w założeniu firmy. Zapewniamy pełną obsługę finansowo-ksiegową oraz kadrowo-płacową podmiotów gospodarczych, niezależnie od formy prawnej. Naszym klientom oferujemy doradztwo w kwestiach podatkowych i biznesowych oraz pomagamy w pozyskiwaniu kredytów. Każdy klient otrzymuje wsparcie i możliwośc indywidualnych konsultacji. Przejmujemy na siebie pełnię kwestii księgowo - podatkowych tak, aby klient mógł w pełni skupić się na prowadzeniu biznesu.';

export const offerContent = [
  {
    icon: AssignmentIcon,
    title: 'Usługi księgowe',
    features: ['księgi handlowe', 'KPiR', 'ryczałt'],
  },
  {
    icon: PeopleIcon,
    title: 'Usługi kadrowo-płacowe',
    features: ['kadry', 'płace', 'ZUS'],
  },
  {
    icon: SchoolIcon,
    title: 'Usługi doradcze',
    features: [
      'doradztwo',
      'umowy',
      'rejestracja działalności',
      'zakładanie spółek',
    ],
  },
  {
    icon: ThumbIcon,
    title: 'Pozostałe usługi',
    features: ['analizy', 'raporty', 'pozyskiwanie kredytów'],
  },
];

export const pricingContent = [
  {
    icon: PasteIcon,
    title: 'KPiR/Ryczałt',
    features: ['jednoosobowa działalność', 'spółka cywilna'],
    price: 'już od 250 pln netto miesięcznie',
    secondary: false,
  },
  {
    icon: WorkIcon,
    title: 'Księgi Handlowe',
    features: ['spółki osobowe', 'spółki kapitałowe'],
    price: 'już od 600 pln netto miesięcznie',
    secondary: true,
  },
];
