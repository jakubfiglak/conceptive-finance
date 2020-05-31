import AssignmentIcon from '../assets/icons/assignment.inline.svg';
import PeopleIcon from '../assets/icons/group.inline.svg';
import SchoolIcon from '../assets/icons/school.inline.svg';
import ThumbIcon from '../assets/icons/thumb_up.inline.svg';
import PasteIcon from '../assets/icons/paste.inline.svg';
import WorkIcon from '../assets/icons/work.inline.svg';

export const companyName = 'conceptive finance';
export const welcomeText =
  'Usługi księgowe, usługi kadrowo-płacowe, księgi handlowe, ryczałt, deklaracje, doradztwo, umowy';

export const aboutText =
  'Jesteśmy grupą wykwalifikowanych księgowych, którzy zadbają o spokój w finansach Twojej firmy. Kładziemy nacisk na profesjonalizm oraz jakość świadczonych przez nas usług. Zapewniamy pełną obsługę finansowo - księgową, a także kadrowa i płacową podmiotów gospodarczych niezależnie od formy prawnej. Naszym klientom oferujemy doradztwo w kwestiach podatkowych oraz biznesowych i reprezentację w urzędach. Pomagamy w założeniu firmy. Każdy klient otrzymuje wsparcie księgowego i możliwośc indywidualnych konsultacji. Przejmujemy na siebie pełnię kwestii księgowo - podatkowych tak, aby klient mógł w pełni skupić się na prowadzeniu biznesu.';

export const offerContent = [
  {
    icon: AssignmentIcon,
    title: 'Usługi księgowe',
    features: ['księgi handlowe', 'KPiR', 'ryczałt', 'deklaracje'],
  },
  {
    icon: PeopleIcon,
    title: 'Usługi kadrowo-płacowe',
    features: ['kadry', 'płace', 'ZUS'],
  },
  {
    icon: SchoolIcon,
    title: 'Usługi doradcze',
    features: ['doradztwo', 'umowy', 'rejestracja działalności'],
  },
  {
    icon: ThumbIcon,
    title: 'Pozsotałe usługi',
    features: ['analizy', 'raporty', 'budżety'],
  },
];

export const pricingContent = [
  {
    icon: PasteIcon,
    title: 'KPiR/Ryczałt',
    features: ['spułki krzaki', 'wałki', 'żule słupy'],
    price: 'już od 200 pln netto miesięcznie',
    secondary: false,
  },
  {
    icon: WorkIcon,
    title: 'KH',
    features: ['spułki krzaki', 'wałki', 'żule słupy'],
    price: 'już od 600 pln netto miesięcznie',
    secondary: true,
  },
];
