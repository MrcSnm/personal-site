/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Jogo Global',
    position: 'Senior Game Developer',
    url: 'https://jogoglobal.com/',
    startDate: '2022-11-01',
    summary: '- Worked and participated on improvement of an existing frameworks for development in slot games\n'
    + '- Released multiple titles and multiple genres such as Scratch, Slot-Mahcine and Double\n'
    + '- Participated in code reviews and brought improvements to CI\n'
    + '- Wrote extensive documentation to support client code usage and maintenance\n'
    + '- Done formal trainings regarding IT security and casino rules\n'
    + '- Ported 15+ games from an old to a newer framework',
    // highlights: [
    //   'Built and scaled engineering team, emphasizing diversity and open-source contribution',
    //   'Established key partnerships with AI research institutions and tech companies',
    // ],
  },
  {
    name: 'Plan A Technologies',
    position: 'Frontend Developer',
    url: 'https://planatechnologies.com/',
    startDate: '2023-10-01',
    endDate: '2024-10-01',
    summary: '- Supported client in taking their decisions\n'
    + '- Helped client in developing games and refactoring by using their internal tooling\n'
    + '- Developed a slot machine game framework using Cocos Creator from ground up\n'
    + '- Worked on mock math engine implementation\n'
    + '- Optimized existing games by reducing up to 90% of build size\n'
    + '- Built documentation and internal tooling\n',
  },
  {
    name: 'SOFTGAMES',
    position: 'Game Developer',
    url: 'https://www.softgames.com/',
    startDate: '2024-03-01',
    endDate: '2024-08-01',
    summary: '- Suggested new clients for the studio\n'
    + '- Worked in the improvement of a porting framework\n'
    + '- Completed 12+ full game ports, including version upgrades and platform optimization\n'
    + '- Used multiple third party consoles for deploying and releasing\n',
  },
  {
    name: 'Kroton',
    position: 'Course Developer',
    url: 'https://www.kroton.com.br/',
    startDate: '2023-06-01',
    endDate: '2023-11-01',
    summary: '- Developed and reviewed graduation course material.\n'
    + '- Reviewed questionnaire created by professors.\n',
  },
  {
    name: 'Ortiz Gaming',
    position: 'Mid Level Game Developer',
    url: 'https://ortizgaming.com/en/',
    startDate: '2020-11-01',
    endDate: '2022-10-01',
    summary: '- Supported bare metal division technology\n'
    + '- Improved team productivity by reducing test iteration time from 2 minutes to 5 seconds\n'
    + '- Reduced game download sizes by 50%\n'
    + '- Built a framework which reduced release time by 1 month per game\n'
    + '- Prepared trainings for the team\n',
  },
  {
    name: 'J.Piaget Sistema de Ensino Multimidia',
    position: 'Game Developer',
    url: 'https://jpiaget.com.br/',
    startDate: '2018-08-01',
    endDate: '2020-01-01',
    summary: '- Worked for mobile game development\n'
    + '- Distribution workflow for both Android and iOS',
  },
];

export default work;
