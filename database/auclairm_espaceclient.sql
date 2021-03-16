-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 05 mars 2021 à 18:14
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `auclairm_espaceclient`
--

-- --------------------------------------------------------

--
-- Structure de la table `param_liste_metiers`
--

CREATE TABLE `param_liste_metiers` (
  `ref_metier` int(11) NOT NULL,
  `intitule_metier` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `param_liste_metiers`
--

INSERT INTO `param_liste_metiers` (`ref_metier`, `intitule_metier`) VALUES
(1, 'Cuisinier'),
(2, 'Serveur (se)'),
(3, 'Gardien'),
(4, 'Livreur'),
(5, 'Plongeur'),
(6, 'Agent d\'entretien'),
(7, 'Chef de partie'),
(8, 'agent de labo'),
(9, 'Agent administratif'),
(10, 'Agent de sécurite'),
(11, 'Chauffeur'),
(12, 'Agent de maintenance'),
(13, 'Ouvrière station'),
(14, 'Emballage'),
(15, 'métier 1'),
(16, 'métier 2'),
(17, 'métier 3'),
(18, 'métier 4'),
(19, 'métier 5'),
(20, 'linge plat'),
(21, 'Agent de production'),
(22, 'HRS Specialist, Morocco'),
(23, 'HR Manager ISC, Morocco'),
(24, 'Human Resources Business Partn'),
(25, 'HR Solutions Coordinator'),
(26, 'HRS Lead NA'),
(27, 'HR Specialist ISC'),
(28, 'HSE Supervisor'),
(29, 'HSE Lead, Morocco'),
(30, 'HSE officer'),
(31, 'Sefety Process Lead'),
(32, 'Supervisor Safety & Environmen'),
(33, 'Finished Products Transfer Con'),
(34, 'Warehouse Assistant'),
(35, 'Production Maker'),
(36, 'Logistics Controller'),
(37, 'Logistics Maker'),
(38, 'Forklift Operator'),
(39, 'Finished Goods Transfer Contro'),
(40, 'Qualified Worker'),
(41, 'Worker'),
(42, 'Driver'),
(43, 'Shipping Clerk'),
(44, 'Logistics Unit Leader, Raw Mat'),
(45, 'Logistics Unit Coordinator Raw'),
(46, 'Production Planner & Inb Logistics Spe'),
(47, 'Spare Parts Warehouse Keeper,'),
(48, 'Mechanical Technician'),
(49, 'Team Leader Maintenance'),
(50, 'Maintenance Unit Coordinator'),
(51, 'Mechanician'),
(52, 'Piping Technician'),
(53, 'Team Leader Operation Line Mai'),
(54, 'Machine Driver'),
(55, 'Refrigeration Technician'),
(56, 'Team Leader Maintenance , Wafe'),
(57, 'Team Leader Electricity'),
(58, 'Electricity Technician'),
(59, 'Brazier'),
(60, 'Team Leader Maintenance, Cakes'),
(61, 'Team Leader Utilities'),
(62, 'Electrician'),
(63, 'Electricity Assistant'),
(64, 'Hygiene Operator'),
(65, 'Team Leader Maintenance Biscui'),
(66, 'Plumber'),
(67, 'Cutter Technician'),
(68, 'Mechanical Assistant'),
(69, 'Machine Operator Powdered Beve'),
(70, 'Machine Operator Coffee'),
(71, 'Mgr ISC Finance, Morocco'),
(72, 'SAP Key User'),
(73, 'Compound Production Unit Leade'),
(74, 'Team Leader Production'),
(75, 'Production Unit Leader'),
(76, 'Section Supervisor, Biscuits B'),
(77, 'Supervisor Production Logistic'),
(78, 'Monitoring Agent'),
(79, 'Production Unit Coordinator'),
(80, 'Production Line Controller'),
(81, 'Section Supervisor, Wafers'),
(82, 'Continuous Improvement Manager'),
(83, 'Section Supervisor Compound &'),
(84, 'Team Leader Data Reporting'),
(85, 'Continuous Improvement Unit Le'),
(86, 'Logistics Unit Leader , Raw Ma'),
(87, 'Manufacturing Manager, Biscuit'),
(88, 'Business Development Manager'),
(89, 'Manufacturing & Projects Adm.'),
(90, 'Materials Planner, Biscuits'),
(91, 'Plant Mgr Biscuits - Casablanc'),
(92, 'Security & Maintenance & Repai'),
(93, 'Integrated Lean Six Sigma Engi'),
(94, 'Section Manager Cake'),
(95, 'Engineering Manager'),
(96, 'IL6SMGR'),
(97, 'Manufacturing Director,Morocco'),
(98, 'Material Planner Biscuit'),
(99, 'Plant, CS&L & Procurment Team'),
(100, 'Production Planning& logistics'),
(101, 'IL6S Engineer'),
(102, 'Planning Administrative Assist'),
(103, 'Copacking Planner Coordinator'),
(104, 'Machine Operator'),
(105, 'Line Manning Allocation Progra'),
(106, 'Scrap Area Operator, Bimo 2'),
(107, 'Warehouse Worker'),
(108, 'Sales Assistant'),
(109, 'Operator'),
(110, 'Forklift Driver'),
(111, 'Quality Assurance Controller'),
(112, 'Food Safety & HACCP Program Le'),
(113, 'Quality Assurance Manager'),
(114, 'Program & System Mngt Program'),
(115, 'Fin Products Testing Program C'),
(116, 'Quality Control Unit Coordinat'),
(117, 'Sanitation Program Leader'),
(118, 'Quality Control Leader'),
(119, 'Warehouse Quality Ass Prgram C'),
(120, 'Métier 2 changes'),
(121, 'Métier 1 change'),
(122, 'Salarié');

-- --------------------------------------------------------

--
-- Structure de la table `param_liste_tailles`
--

CREATE TABLE `param_liste_tailles` (
  `ref_taille` int(11) NOT NULL,
  `refgrilletaille_taille` int(11) DEFAULT NULL,
  `ordre_taille` int(11) DEFAULT NULL,
  `intitule_taille` varchar(255) DEFAULT NULL,
  `etat_taille` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `param_liste_tailles`
--

INSERT INTO `param_liste_tailles` (`ref_taille`, `refgrilletaille_taille`, `ordre_taille`, `intitule_taille`, `etat_taille`) VALUES
(1, 2, 1, 'XS', 'A'),
(2, 2, 2, 'S', 'A'),
(3, 2, 3, 'M', 'A'),
(4, 2, 4, 'L', 'A'),
(5, 2, 5, 'XL', 'A'),
(6, 2, 6, '2XL', 'A'),
(7, 2, 7, '3XL', 'A'),
(8, 99, 8, '4XL', 'A'),
(9, 99, 9, '5XL', 'A'),
(10, 99, 10, '6XL', 'A'),
(11, 1, 1, 'TU', 'A'),
(12, 3, 1, '40', 'A'),
(13, 3, 2, '41', 'A'),
(14, 3, 3, '42', 'A'),
(15, 3, 4, '43', 'A'),
(16, 3, 5, '44', 'A'),
(17, 3, 6, '45', 'A'),
(18, 3, 7, '46', 'A'),
(19, 3, 8, '47', 'A'),
(20, 3, 9, '48', 'A'),
(21, 3, 10, '49', 'A'),
(22, 3, 11, '50', 'A'),
(23, 99, 0, '', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_acteurs`
--

CREATE TABLE `web_acteurs` (
  `ref_wacteur` int(11) NOT NULL,
  `refacteur_wacteur` int(11) DEFAULT NULL,
  `code_wacteur` varchar(50) DEFAULT NULL,
  `societe_wacteur` varchar(100) DEFAULT NULL,
  `adresse1_wacteur` varchar(200) DEFAULT NULL,
  `adresse2_wacteur` varchar(200) DEFAULT NULL,
  `localite_wacteur` varchar(100) DEFAULT NULL,
  `cp_wacteur` varchar(10) DEFAULT NULL,
  `refpays_wacteur` int(11) DEFAULT NULL,
  `tel_wacteur` varchar(20) DEFAULT NULL,
  `emailsociete_wacteur` varchar(200) DEFAULT NULL,
  `siteweb_wacteur` varchar(200) DEFAULT NULL,
  `plafond_wacteur` varchar(50) DEFAULT NULL,
  `statutjuridique_wacteur` varchar(50) DEFAULT NULL,
  `patente_wacteur` varchar(11) DEFAULT NULL,
  `if_wacteur` varchar(50) DEFAULT NULL,
  `rc_wacteur` varchar(50) DEFAULT NULL,
  `ice_wacteur` varchar(50) DEFAULT NULL,
  `flag_wacteur` varchar(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_acteurs`
--

INSERT INTO `web_acteurs` (`ref_wacteur`, `refacteur_wacteur`, `code_wacteur`, `societe_wacteur`, `adresse1_wacteur`, `adresse2_wacteur`, `localite_wacteur`, `cp_wacteur`, `refpays_wacteur`, `tel_wacteur`, `emailsociete_wacteur`, `siteweb_wacteur`, `plafond_wacteur`, `statutjuridique_wacteur`, `patente_wacteur`, `if_wacteur`, `rc_wacteur`, `ice_wacteur`, `flag_wacteur`) VALUES
(1, 213, 'ALBZ', '2B2R SARL', 'Maison des provinces de France', 'Boulevard Sidi Abderrahmane', 'Casablanca', '20250', 1, '', 'chais.alabazenne@gmail.com', '', '0', '', '', '', '', '00144585000088', 'A'),
(2, 99, 'ac2ei', 'ac2ei', '39, Avenue Lalla Yacout', '5ème étage, porte D', 'Casablanca', '20300', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(3, 38, 'AMG', 'AMG', 'Lotissement Sidi Omar - Lot n°5', 'Lissasfa', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '000083152000058', 'A'),
(4, 395, 'ANSAMBLE', 'ANSAMBLE MAROC', 'Immeuble Horizon - 1er étage ', 'Mandarona 300 - Lot N° 9 / Sidi Maarouf', 'CASABLANCA', '20000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(5, 208, 'BAB HOTEL', 'BAB HOTEL', '18 rue de la liberté', '', 'Marrakech', '40000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(6, 226, 'BIOLANDES', 'BIOLANDES', 'Boulevard de Rabat', '', 'KHEMISSET', '15000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(7, 177, 'BOMBARDIER', 'Blanchisserie Fouad', '', '', 'CASABLANCA', '', 0, '', '', '', '0', '', '', '', '', '', 'A'),
(8, 236, 'CASATHERM', 'CASATHERM SARL', '1 PLACE AL YASSIR', '', 'CASABLANCA', '20300', 1, '0522401523', 'contact@casatherm.ma', '', '0', 'SARL', '31212117', '01600375', '37623', '000083858000008', 'A'),
(9, 228, 'CLQ.MERSSULTAN', 'CLINIQUE MERS SULTAN', '64 Boulevard Omar El Idrissi', '', 'CASABLANCA', '20000', 1, '0522277272', 'cliniquemersultan@gmail.com', '', '0', '', '', '', '', '001728360000010', 'A'),
(10, 554, 'COMPLIPACK', 'COMPLIPACK', 'Route de Rabat n°1 - km15', 'Aïn Harrouda', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001526718000025', 'A'),
(11, 567, 'COSMETIC HORIZONS', 'COSMETIC HORIZONS SARL AU', 'LOT 126 AL MASSAR ', 'Q.I', 'MARRAKECH', '40000', 1, '', 'zabit.a@ircoslaboratoires.com', 'www.cosmetic-horizons.com', '0', '', '', '', '', '000026550000077', 'A'),
(12, 62, 'DB SCHENKER', 'DB SCHENKER MAROC', 'Boulevard Moulay Slimane', '', 'Casablanca', '20250', 1, '', '', '', '0', '', '', '', '', '001524191000063', 'A'),
(13, 573, 'dindy', 'dindy', '', '', '', '', 0, '', '', '', '0', '', '', '', '', '', 'A'),
(14, 571, 'EIC ', 'Ecole Internationale de Casablanca', '', '', '', '', 0, '', '', '', '0', '', '', '', '', '', 'A'),
(15, 98, 'EIC ANFA', 'Ecole Internationale de Casablanca', '3 avenue de la côte d\'Emeraude', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(16, 207, 'ELITE', 'ELITE RESTAURATION', '26 Rue de la réunion', 'Quartier Bourgogne', 'Casablanca', '20000', 1, '05 22 49 15 26', '', '', '0', '', '', '', '', '001986602000030', 'A'),
(17, 582, 'EMID', 'EMID ', '29, Boulevard Frankiln Rossevelt', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '3366902', '9875', '001612275000041', 'A'),
(18, 570, 'FDB', 'FDBUST', '', '', '', '', 0, '', '', '', '0', '', '', '', '', '', 'A'),
(19, 189, 'FIRST EPONGE', 'FIRST EPONGE', 'Boulevard Chefchaouni ', 'Z.I. Ain Sebaa', 'Casablanca', '20250', 1, '', '', '', '0', '', '', '', '', '001585548000087', 'A'),
(20, 190, 'FRESH GLAMOUR', 'FRESH GLAMOUR', 'Angle Avenue Fal Ould Oumeir et rue Beht, B/32', '2ème et 3ème étage ', 'Rabat', '10000', 1, '', '', '', '0', '', '', '', '', '002110270000025                             ', 'A'),
(21, 119, 'GMA', 'GMA', 'Z.A.E. Lot B2-6', '', 'BENSLIMANE', '', 1, '', '', '', '0', 'SARL', '39770000', '18797233', '4475', '001654347000064', 'A'),
(22, 107, 'FARAH MAGHREB', 'HOTEL FARAH CASABLANCA', '160 Avenue des F.A.R', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(23, 97, 'KENZI', 'HOTEL KENZI TOWER', 'Twin Center - Boulevard Zerktouni', 'Dar-el-Beida', 'Casablanca', '20250', 1, '', '', '', '0', '', '', '', '', '000514277000071', 'A'),
(24, 185, 'DOGE', 'HOTEL LE DOGE', '9 rue docteur Veyre', '', 'Casablanca', '20250', 2, '', '', '', '0', '', '', '', '', '000001965000004', 'A'),
(25, 57, 'IMPERIAL LINENS', 'IMPERIAL LINENS', 'Boulevard Abdellatif Ben Kaddour', '', 'Casablanca', '20100', 1, '', '', '', '11', '', '', '', '', '000031611000006', 'A'),
(26, 566, 'INDUMAPAC', 'INDUMAPAC SARL', 'Boulevard CHEFCHAOUNI', '', 'CASABLANCA', '20580', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(27, 156, 'LABOMAG', 'LABOMAG', 'Boulevard Bangkok', '', 'Casablanca', '20250', 1, '', '', '', '0', '', '', '', '', '001536747000066', 'A'),
(28, 173, 'LES 3 FEES', 'LES 3 FEES', '21, Bd Abdelhadi Boutaleb (ex Rte D\'azemmour Lot Ouba', 'ex Rte D\'azemmour - Lot Ouba', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '002033771000077', 'A'),
(29, 103, 'LES AROMES', 'LES AROMES DU MAROC', 'Route d\'Azemmour - Km5', '', 'Casablanca', '20200', 1, '', '', '', '0', '', '', '', '', '001603310000081', 'A'),
(30, 198, 'LODB', 'LES OLIVIERS DE BENSLIMANE', 'Route de Mohammedia', '', 'BENSLIMANE', '13000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(31, 153, 'DHOLLANDIA', 'MAGHREB HAYON SERVICES', '224, Zone Industrielle Sud-Ouest', '', 'Mohammedia', '28810', 1, '', 'info@dhollandia.ma;mohammed.oualhaji@dhollandia.ma;gerald.brevard@auclair.ma;alexandre.tournier@auclair.ma', '', '0', '', '', '', '', '000229798000059', 'A'),
(32, 211, 'MAISON BELDI', 'MAISON BELDI', '19 RUE DU GHARB HAY LAAYOUNE', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '000083102000050', 'A'),
(33, 72, 'MAITRE GOURMAND', 'MAITRE GOURMAND', 'Rue Socrate - Mag 1 - Résidence Livin Socrate', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001777058000096', 'A'),
(34, 95, 'MARAQUA WATERS', 'MARAQUA WATERS', 'Zone Industrielle', '', 'Benslimane', '13000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(35, 60, 'MATHE', 'MATHE', '37 Parc Industriel CFCIM', 'SOGEPIB - lot 37/38', 'BOUSKOURA', '20180', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(36, 191, 'MESSEM', 'MESSEM MAROC', 'Z.I. Lahyayda, km 15 - route Mly Bousselham', ' BP 370', 'LARACHE', '92000', 1, '', '', '', '0', '', '', '', '', '001537274000096', 'A'),
(37, 66, 'METAROM', 'METAROM', 'Z.A.E', 'Lot B1-6', 'BENSLIMANE', '13000', 1, '05-46-15-32-87', 'loubna.hasnaoui@metarom.ma;alexandre.tournier@auclair.ma', '', '0', '', '', '', '', '000078774000021', 'A'),
(38, 121, 'NGA', 'NAVAL GLOBAL ASSISTANCES', 'Rue de Barcelone', 'Zone Industrielle - Aïn Sebaa, Lot 3', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001592219000002', 'A'),
(39, 169, 'NOIRAUD', 'NOIRAUD', '57 Rue Moussa Ibnou Noussair', 'Gauthier', 'Casablanca', '20000', 1, '', 'commande@noiraud.ma;gerald.brevard@auclair.ma;alexandre.tournier@auclair.ma', '', '0', '', '', '', '', '000110720000003', 'A'),
(40, 555, 'PAN MAROC', 'PAN MAROC', '6 allée des Cyprès C/o Ipsen Logistics', 'Aïn Sebâa', 'Casablanca', '20250', 1, '', '', '', '0', '', '', '', '', '000209670000024', 'A'),
(41, 578, 'PHARMA.CHARAZAD', 'PHARMACIE CHARAZAD', '158 RUE EZZOUHOUR', 'DERB SULTANE', 'CASABLANCA', '20000', 1, '', '', '', '0', '', '', '', '', '001847825000093', 'A'),
(42, 581, 'PHARMA.DADI', 'PHARMACIE DADI', '', '', 'CASABLANCA', '20000', 1, '', '', '', '0', '', '', '', '', '001587585000087', 'A'),
(43, 577, 'PHARMA.EL FAIZ', 'PHARMACIE EL FAIZ', '5 Boulevard Khalid Ibnou EL WALID', 'AIN SEBAA', 'CASABLANCA', '20000', 1, '', '', '', '0', '', '', '', '', '000468060000025', 'A'),
(44, 579, 'PHARMA.IBN BATOU', 'PHARMACIE IBNOU BATOU', '', '', 'CASABLANCA', '2000', 1, '', '', '', '0', '', '', '', '', '001678240000003', 'A'),
(45, 576, 'PHARMA.MONICA', 'PHARMACIE MONICA', 'Boulevard HASSAN 2', '', 'MOHAMMEDIA', '28820', 1, '', '', '', '0', 'SARL', '', '', '', '001093540000056', 'A'),
(46, 572, 'PHARMA.PARANFA', 'PHARMACIE PARANFA', 'Centre Commercial Paranfa', '', 'Casablanca', '20000', 1, '0522393401', '', '', '0', '', '', '', '', '001823934000003', 'A'),
(47, 580, 'PHARMA.EL HOUDA', 'PHARMACIE.EL HOUDA', '', '', 'CASABLANCA', '20000', 1, '', '', '', '0', '', '', '', '', '001613446000046', 'A'),
(48, 559, 'QUALIMAG', 'QUALIMAG', 'Boulevard Bangkok', '', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001541629000075', 'A'),
(49, 134, 'RAFC', 'Régie Autonome des Frigorifiques de Casablanca', 'Avenue du 10 mars', 'Sidi Othmane', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001580357000079', 'A'),
(50, 216, 'REZO', 'REZOROUTE', '18 bd Massira El Khadra', 'imm. Massimo Dutti', 'Casablanca', '20100', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(51, 4, 'ROY AGRI MAROC', 'ROY AGRI MAROC', 'Résidence Medhi n°38', 'Rue Mohammed Abdou 3ème étage appt n° 10', 'KENITRA', '14000', 1, '+212607895652', 'ana@anass.com', 'www.youtube.com', '0', 'SARL', '20803041', '1680542', '30119', '001535570000029', 'A'),
(52, 206, 'RYAD AUTO', 'RYAD AUTO', ' bd Mehdi Benbarka (Souissi) ', ' secteur 13 lot. U n° 2-hay Ryad', 'Rabat', '10100', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(53, 194, 'RYAD AUTO', 'RYAD AUTO', 'Avenue Mehdi Ben Barka', '', 'Rabat', '10100', 1, '', '', '', '0', '', '', '', '', '000134824000065', 'A'),
(54, 1, 'AUCLAIR GMA', 'SARL GMA', 'Z.A.E. Lot B2-6', '', 'Benslimane', '13000', 1, '', '', '', '0', '', '', '', '', '001594884000021', 'A'),
(55, 2, 'AUCLAIR TOUBRE', 'SARL TOUBRE', '217 boulevard Brahim Roudani prolongé', 'Résidence El fath N°3', 'Casablanca', '20100', 1, '0606060606', 'email@email.com', 'site.com', '0', '', '', '', '', '', 'A'),
(56, 229, 'SCAF', 'SCAF TIGUELMAMINE', 'Km 5 Route de Rabat', 'BP 7', 'KHEMISSET', '15000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(57, 192, 'SERRAJ_2mars', 'SERRAJ', 'Avenue 2 mars', '15 Boulevard Lamartine', 'Casablanca', '20000', 1, '05.22.85.44.30', 'amgsoukayna@gmail.com;reda@serraj.com;gerald.brevard@auclair.ma;alexandre.tournier@auclair.ma', '', '0', '', '', '02501471', '96771', '000084994000085', 'A'),
(58, 45, 'SICDA', 'SICDA', 'Route de Marrakech', 'Zone Industrielle', 'Berrechid', '26200', 1, '', 'e.sihame@sicda.ma', '', '0', '', '', '', '', '', 'A'),
(59, 154, 'SIMRA', 'SIMRA MAROC', 'Zone Technopole Med. V ', '', 'Casablanca', '', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(60, 58, 'SISTEO', 'SISTEO', '20, rue Zayan', '', 'Rabat', '10000', 0, '0614358860', '', '', '0', '', '', '', '', '', 'A'),
(61, 123, 'BA HMAD', 'SMEIA', '47 Boulevard Ba Hmad', '', 'Casablanca', '20300', 1, '', '', '', '0', '', '', '', '', '000131845000085', 'A'),
(62, 43, 'SOFADEX', 'SOFADEX PURATOS', 'NGLE RUES JULES ZANNIER ET BIR HAKIM', 'BOULEVARD DE L\'OASIS', 'CASABLANCA', '20000', 1, '', 'lennesyry@sofapur.com;rnavarro@sofapur.com;alexandre.tournier@auclair.ma', '', '0', '', '', '', '', '000084009000005', 'A'),
(63, 557, 'SOMAFEP', 'SOMAFEP', 'km 24 route de Rabat Ben Yakhlef', ' BP77 ', 'MOHAMMEDIA', '28800', 1, '', '', '', '0', '', '', '', '', '001537261000059', 'A'),
(64, 200, 'STARMAT', 'STARMAT', '9 Rdc Rue 71 Gp 1 Ely Sadri ', 'Sidi Othmane', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001846840000014', 'A'),
(65, 35, 'SW', 'SUBLIWEAR', 'Rue Mohamed El Radi Slaoui', '', 'CASABLANCA', '20230', 1, '', '', '', '0', '', '', '', '', '000093564000040', 'A'),
(66, 28, 'SUBLIWEAR', 'SUBLIWEAR', 'Rue 1, n°104, Etage 3', 'Zone Industrielle Moulay Rachid', 'CASABLANCA', '20000', 1, '', '', '', '0', 'SARL', '32391179', '', '284971', '000093564000040', 'A'),
(67, 197, 'TECHNOWASH', 'TECHNOWASH', '', '', 'NOUASSEUR', '', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(68, 120, 'TEXTIFOR', 'TEXTIFOR SARL', 'Rue 6 - n°33 Résidence Hamad Mazola ', 'Hay Hassani', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '', 'A'),
(69, 77, 'TPM', 'TPM', '', '', 'Casablanca', '', 0, '', '', '', '0', '', '', '', '', '', 'A'),
(70, 186, 'VGK', 'VGK', 'Autoroute Rabat – Casablanca Sortie Est Mohammedia', ' Km2 ', 'Benslimane', '13000', 1, '', '', '', '0', '', '', '', '', '000206009000028', 'A'),
(71, 104, 'VIVANTIS', 'VIVANTIS', '8 rue d\'Ifrane', 'CIL', 'Casablanca', '20250', 1, '', 'elhafidi.leila@gmail.com;gerald.brevard@auclair.ma;alexandre.tournier@auclair.ma', '', '0', '', '', '', '', '00008167300002708', 'A'),
(72, 203, 'YandCo', 'YASMINE AND CO', 'Parc Industriel Bouskoura - CFCIM', 'Lot 69', 'Casablanca', '20000', 1, '', '', '', '0', '', '', '', '', '001603443000079', 'A'),
(73, 126, 'SWEET', 'YASSIR ICE', 'Z.A.E', 'Lot B1-9', 'Benslimane', '13000', 1, '', '', '', '0', '', '', '', '', '', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_acteurs_sites`
--

CREATE TABLE `web_acteurs_sites` (
  `ref_wsiteacteur` int(11) NOT NULL,
  `refacteur_wsiteacteur` int(11) DEFAULT NULL,
  `code_wsiteacteur` varchar(50) DEFAULT NULL,
  `intitule_wsiteacteur` varchar(100) DEFAULT NULL,
  `adresse_wsiteacteur` varchar(255) DEFAULT NULL,
  `localite_wsiteacteur` varchar(50) DEFAULT NULL,
  `tel_wsiteacteur` varchar(50) DEFAULT NULL,
  `deporte_wsiteacteur` varchar(5) DEFAULT NULL,
  `coutrajetaller_wsiteacteur` double DEFAULT NULL,
  `livraison_wsiteacteur` varchar(1) DEFAULT NULL,
  `flag_wsiteacteur` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_acteurs_sites`
--

INSERT INTO `web_acteurs_sites` (`ref_wsiteacteur`, `refacteur_wsiteacteur`, `code_wsiteacteur`, `intitule_wsiteacteur`, `adresse_wsiteacteur`, `localite_wsiteacteur`, `tel_wsiteacteur`, `deporte_wsiteacteur`, `coutrajetaller_wsiteacteur`, `livraison_wsiteacteur`, `flag_wsiteacteur`) VALUES
(1, 1, 'INDU', 'INDU', 'adr', 'loctel', 'tel', 'n', NULL, 'o', 'A'),
(2, 3, 'DEPOT', 'Dépot fournisseur', '', '', '', 'n', NULL, 'o', 'A'),
(3, 28, 'DEPOT', 'Dépot fournisseur', NULL, NULL, NULL, NULL, NULL, 'o', 'A'),
(4, 35, 'DEPOT', 'Dépot fournisseur', NULL, NULL, NULL, NULL, NULL, 'o', 'A'),
(5, 4, 'LM', 'LALLA MIMOUNA', 'LALLA MIMOUNA', 'KENITRA', '', 'n', NULL, 'o', 'A'),
(6, 4, 'GR', 'GELAS RAIMY', 'MNASRA', 'KENITRA', '', 'n', NULL, 'n', 'A'),
(7, 4, 'KS', 'KCEYBYA', 'SIDI YAHYA GHARB', 'KENITRA', '', 'n', NULL, 'n', 'A'),
(8, 38, 'LISS', 'LISSASFA', 'Lissasfa', 'Casablanca', '', 'n', NULL, 'o', 'A'),
(9, 156, 'Site 01', 'Site 01', '', 'CASABLANCA', '', 'n', NULL, NULL, 'A'),
(10, 395, 'OCP', 'OCP', 'OCP', 'CASABLANCA', '', 'n', NULL, NULL, 'A'),
(11, 395, 'FMF', 'Fédération Marocaine de Football', 'RABAT', 'RABAT', '', 'n', NULL, NULL, 'A'),
(12, 445, 'site01', 'site 01', '', 'casa', '', 'n', NULL, NULL, 'A'),
(13, 2, 'BENS', 'UNITE DE TRAITEMENT', 'ZAE', 'BENSLIMANE', '05', 'n', 125, NULL, 'A'),
(14, 552, 'HUI', 'HUI.M6', '', 'BOUSKOURA', '', 'n', 100, NULL, 'A'),
(15, 556, 'VEOLIA', 'RABAT / TANGER', '', 'RABAT / TANGER', '', 'n', 500, NULL, 'A'),
(16, 191, 'site1', 'sité1', '', 'LARACHE', '', 'n', 200, NULL, 'A'),
(17, 558, 'LAJR_RB', 'RABAT', '', 'RABAT', '', 'n', 100, NULL, 'A'),
(18, 555, 'PAN_CASA', 'site1', '', 'Casablanca', '', 'n', 50, NULL, 'A'),
(19, 562, 'USINE', 'CASABLANCA', '', 'CASA', '', 'n', 100, NULL, 'A'),
(20, 563, 'USINE', 'Site_Casablanca', '', 'Casablanca', '', 'n', 0, NULL, 'A'),
(21, 572, 'site01', 'site01', '', '', '', 'n', 0, NULL, 'A'),
(22, 584, 'CASA1', 'Unité de Production Casablanca', '', 'Casablanca', '', 'n', 50, NULL, 'A'),
(23, 228, 'Site1', 'mers_sultan', '', 'Casablanca', '', 'n', 50, NULL, 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_acteurs_sites_departements`
--

CREATE TABLE `web_acteurs_sites_departements` (
  `ref_wdepsite` int(11) NOT NULL,
  `refacteur_wdepsite` int(11) DEFAULT NULL,
  `refsite_wdepsite` int(11) DEFAULT NULL,
  `ordre_wdepsite` int(11) DEFAULT NULL,
  `intitule_wdepsite` varchar(100) DEFAULT NULL,
  `abrev_wdepsite` varchar(8) DEFAULT NULL,
  `flag_wdepsite` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_acteurs_sites_departements`
--

INSERT INTO `web_acteurs_sites_departements` (`ref_wdepsite`, `refacteur_wdepsite`, `refsite_wdepsite`, `ordre_wdepsite`, `intitule_wdepsite`, `abrev_wdepsite`, `flag_wdepsite`) VALUES
(1, 156, 9, 1, 'Dépt. Chimie', 'Dpt CH', 'A'),
(2, 156, 5, 2, 'Dépt. Microbiologie', 'Dpt MI', 'A'),
(3, 156, 5, 3, 'Dépt. Contaminants', 'Dpt CO', 'A'),
(4, 4, 5, 4, 'Agents de broyage', 'Dpt BR', 'A'),
(5, 156, 5, 5, 'Dépt. R&D', 'Dpt R&D', 'A'),
(6, 156, 9, 6, 'Agent d\'entretien/maintenance', 'AE/AM', 'A'),
(7, 156, 9, 7, 'Agent de ménage', 'AM', 'A'),
(8, 156, 9, 8, 'Gardien/chauffeur', 'GN/CH', 'A'),
(9, 4, 5, 1, 'Station', 'STAT', 'A'),
(10, 395, 10, 1, 'Cuisine', 'C', 'A'),
(11, 38, 8, 1, 'Production', 'PR', 'A'),
(12, 38, 8, 2, 'Maintenance', 'MA', 'A'),
(13, 38, 8, 3, 'Ménage', 'ME', 'A'),
(14, 38, 8, 4, 'Sécurité', 'SE', 'A'),
(15, 38, 8, 5, 'chauffeur', 'CH', 'A'),
(16, 38, 8, 6, 'Administration', 'AD', 'A'),
(17, 445, 12, 1, 'Cuisine', 'C', 'A'),
(18, 445, 12, 2, 'Salle', 'S', 'A'),
(19, 2, 13, 1, 'PROD', 'PR', 'A'),
(20, 4, 6, 2, 'ADMIN', 'AD', 'A'),
(21, 552, 14, 1, 'Chambre standard / lit adulte', 'STDA', 'A'),
(22, 552, 14, 2, 'Chambre VIP / lit adulte', 'VIP', 'A'),
(23, 552, 14, 3, 'Chambre standard / lit bébé', 'STDB', 'A'),
(24, 558, 17, 1, 'CUISINE', 'CU', 'A'),
(25, 558, 17, 2, 'SALLE', 'SA', 'A'),
(26, 558, 17, 3, 'TABLE', 'TA', 'A'),
(27, 562, 19, 1, 'UNITE', 'UNIT', 'A'),
(28, 4, 20, 1, 'Usine', 'US', 'A'),
(29, 584, 22, 1, 'Production', 'PROD', 'A'),
(30, 584, 22, 2, 'Maintenance', 'MAINT', 'A'),
(31, 584, 22, 3, 'Administration', 'ADMIN', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_articlesprojet`
--

CREATE TABLE `web_articlesprojet` (
  `ref_artpweb` int(11) NOT NULL,
  `refacteur_artpweb` int(11) DEFAULT NULL,
  `refcontrat_artpweb` int(11) DEFAULT NULL,
  `typemvt_artpweb` varchar(20) DEFAULT NULL,
  `reprojet_artpweb` int(11) DEFAULT NULL,
  `projet_artpweb` varchar(100) DEFAULT NULL,
  `refsite_artpweb` int(11) DEFAULT NULL,
  `site_artpweb` varchar(100) DEFAULT NULL,
  `refdep_artpweb` int(11) DEFAULT NULL,
  `departement_artpweb` varchar(100) DEFAULT NULL,
  `refmetier_artpweb` int(11) DEFAULT NULL,
  `metier_artpweb` varchar(100) DEFAULT NULL,
  `reffamniv1_artpweb` int(11) DEFAULT NULL,
  `famniv1_artpweb` varchar(100) DEFAULT NULL,
  `reffamniv2_artpweb` int(11) DEFAULT NULL,
  `famniv2_artpweb` varchar(100) DEFAULT NULL,
  `reffamniv3_artpweb` int(11) DEFAULT NULL,
  `famniv3_artpweb` varchar(100) DEFAULT NULL,
  `refarticle_artpweb` int(11) DEFAULT NULL,
  `refarticleprojet_artpweb` int(11) DEFAULT NULL,
  `codearticle_artpweb` varchar(100) DEFAULT NULL,
  `intitulearticle_artpweb` varchar(100) DEFAULT NULL,
  `genre_artpweb` varchar(100) DEFAULT NULL,
  `abrevcouleurdom_artpweb` varchar(10) DEFAULT NULL,
  `couleur_artpweb` varchar(100) DEFAULT NULL,
  `brand_artpweb` varchar(100) DEFAULT NULL,
  `specificites_artpweb` varchar(100) DEFAULT NULL,
  `reglechange_artpweb` varchar(100) DEFAULT NULL,
  `taille_artpweb` varchar(20) DEFAULT NULL,
  `qte_artpweb` int(11) DEFAULT NULL,
  `tottrait_artpweb` int(11) DEFAULT NULL,
  `totreparation_artpweb` int(11) DEFAULT NULL,
  `totreforme_artpweb` int(11) DEFAULT NULL,
  `flag_artpweb` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `web_contrats`
--

CREATE TABLE `web_contrats` (
  `ref_wcontrat` int(11) NOT NULL,
  `refcontrat_wcontrat` int(11) NOT NULL,
  `refacteur_wcontrat` int(11) DEFAULT NULL,
  `entretien_wcontrat` varchar(10) DEFAULT NULL,
  `location_wcontrat` varchar(10) DEFAULT NULL,
  `code_wcontrat` varchar(50) DEFAULT NULL,
  `date_wcontrat` date DEFAULT NULL,
  `datemiseenplace_wcontrat` date DEFAULT NULL,
  `du_wcontrat` date DEFAULT NULL,
  `au_wcontrat` date DEFAULT NULL,
  `minicontratpar_wcontrat` varchar(5) DEFAULT 'M',
  `htminicontrat_wcontrat` double DEFAULT NULL,
  `note_wcontrat` text DEFAULT NULL,
  `etat_wcontrat` varchar(5) DEFAULT NULL,
  `flag_wcontrat` varchar(5) NOT NULL,
  `dureecontratmois_wcontrat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_contrats`
--

INSERT INTO `web_contrats` (`ref_wcontrat`, `refcontrat_wcontrat`, `refacteur_wcontrat`, `entretien_wcontrat`, `location_wcontrat`, `code_wcontrat`, `date_wcontrat`, `datemiseenplace_wcontrat`, `du_wcontrat`, `au_wcontrat`, `minicontratpar_wcontrat`, `htminicontrat_wcontrat`, `note_wcontrat`, `etat_wcontrat`, `flag_wcontrat`, `dureecontratmois_wcontrat`) VALUES
(1, 1, 1, 'True', 'True', 'Contrat17000001', '2017-02-10', '2017-02-01', '2017-02-02', '2017-02-03', 'M', 0, '234', 'ACT', 'T', 0),
(2, 2, 4, 'True', 'True', 'C17-01-01', '2017-02-16', '2017-02-16', '2017-02-16', '2018-02-16', 'M', 0, '', 'ACT', 'T', 0),
(3, 5, 4, 'True', 'True', 'Contrat17000031', '2017-02-01', '2017-02-01', '2017-02-01', '2018-02-01', 'M', 0, 'livraison le mardi à 15H30', 'ACT', 'T', 0),
(4, 6, 38, 'True', 'True', 'Contrat19000009', '2017-02-14', '2017-05-15', '2017-05-15', '2020-05-15', 'M', 0, 'livraison le mardi 12h00', 'ACT', 'T', 0),
(5, 7, 0, 'True', 'True', 'Contrat17000022', '2017-04-03', '2017-04-03', '2017-04-03', '2017-04-03', 'M', 0, '', 'ACT', 'T', 0),
(6, 8, 51, 'False', 'False', 'Contrat17000015', '2017-05-23', '2017-05-23', '2017-05-23', '2017-05-23', 'M', 0, '', 'ACT', 'T', 0),
(7, 9, 36, 'True', 'True', 'Contrat18000005', '2017-05-15', '2018-03-01', '2018-03-01', '2018-09-30', 'M', 0, '', 'ACT', 'T', 0),
(8, 10, 66, 'True', 'True', 'Contrat17000027', '2017-07-15', '2017-07-15', '2017-07-15', '2017-07-15', 'M', 0, 'RAMASSAGE VENDREDI SOIR', 'clo', 'T', 0),
(9, 12, 58, 'False', 'False', 'Contrat17000032', '2017-07-27', '2017-07-27', '2017-07-27', '2018-07-27', 'M', 0, 'confection + entretien', 'ACT', 'T', 0),
(10, 13, 39, 'False', 'False', 'Contrat17000034', '2017-08-24', '2017-08-24', '2017-08-24', '2018-08-24', 'M', 0, '', 'ACT', 'T', 0),
(11, 14, 72, 'True', 'True', 'Contrat17000035', '2017-09-15', '2017-09-19', '2017-09-22', '2020-09-22', 'M', 0, '1er point de vente SERRAJ (Socrate)', 'ACT', 'T', 0),
(12, 15, 43, 'True', 'True', 'Contrat17000038', '2017-10-11', '2017-10-11', '2017-10-11', '2018-10-11', 'M', 0, '', 'ACT', 'T', 0),
(13, 16, 45, 'True', 'True', 'Contrat17000041', '2017-10-20', '2017-10-20', '2017-10-20', '2017-10-20', 'M', 0, '', 'ACT', 'T', 0),
(14, 17, 95, 'False', 'False', 'Contrat17000042', '2017-10-20', '2017-10-20', '2017-10-20', '2017-10-20', 'M', 0, '', 'ACT', 'T', 0),
(15, 18, 101, 'False', 'False', 'Contrat17000044', '2017-11-21', '2017-11-21', '2017-11-21', '2017-11-21', 'M', 0, '', 'ACT', 'T', 0),
(16, 19, 99, 'False', 'False', 'Contrat17000045', '2017-12-07', '2017-12-07', '2017-12-07', '2017-12-07', 'M', 0, '', 'ACT', 'T', 0),
(17, 20, 97, 'False', 'False', 'Contrat17000046', '2017-12-26', '2017-12-26', '2017-12-26', '2017-12-26', 'M', 0, '', 'ACT', 'T', 0),
(18, 21, 60, 'False', 'False', 'Contrat17000047', '2017-12-27', '2017-12-27', '2017-12-27', '2017-12-27', 'M', 0, '', 'ACT', 'T', 0),
(19, 22, 107, 'False', 'False', 'Contrat18000001', '2018-01-30', '2018-01-30', '2018-01-30', '2018-01-30', 'M', 0, '', 'ACT', 'T', 0),
(20, 23, 98, 'False', 'False', 'Contrat18000003', '2018-01-30', '2018-01-30', '2018-01-30', '2018-01-30', 'M', 0, '', 'ACT', 'T', 0),
(21, 24, 36, 'True', 'False', 'Contrat18000007', '2018-03-08', '2018-03-08', '2018-03-08', '2019-03-08', 'M', 0, '', 'ACT', 'T', 0),
(22, 25, 134, 'True', 'False', 'Contrat18000008', '2018-04-16', '2018-04-14', '2018-04-14', '2019-04-14', 'M', 0, 'bon de comande / pas de contrat', 'ACT', 'T', 0),
(23, 26, 136, 'False', 'False', 'Contrat18000009', '2018-07-05', '2018-07-05', '2018-07-05', '2018-07-05', 'M', 0, '', 'ACT', 'T', 0),
(24, 27, 156, 'True', 'True', 'Contrat18000011', '2018-08-13', '2018-08-13', '2018-08-13', '2018-08-13', 'M', 0, '', 'ACT', 'T', 0),
(25, 28, 121, 'True', 'True', 'Contrat18000012', '2018-09-12', '2018-09-12', '2018-09-12', '2018-09-12', 'M', 2500, '', 'ACT', 'T', 0),
(26, 29, 104, 'True', 'True', 'Contrat18000013', '2018-09-13', '2018-09-13', '2018-09-13', '2021-09-13', 'M', 0, '', 'ACT', 'T', 0),
(27, 30, 103, 'False', 'False', 'Contrat18000014', '2018-09-25', '2018-09-25', '2018-09-25', '2018-09-25', 'M', 0, '', 'ACT', 'T', 0),
(28, 32, 57, 'False', 'False', 'Contrat18000016', '2018-09-28', '2018-09-28', '2018-09-28', '2018-09-28', 'M', 0, '', 'ACT', 'T', 0),
(29, 33, 97, 'False', 'False', 'Contrat18000017', '2018-09-28', '2018-09-28', '2018-09-28', '2018-09-28', 'M', 0, '', 'ACT', 'T', 0),
(30, 34, 154, 'True', 'False', 'Contrat18000018', '2018-11-10', '2018-11-10', '2018-11-10', '2018-11-10', 'M', 0, '', 'ACT', 'T', 0),
(31, 35, 153, 'False', 'True', 'Contrat18000019', '2018-11-16', '2018-11-16', '2018-11-16', '2018-11-16', 'M', 0, '', 'ACT', 'T', 0),
(32, 37, 173, 'True', 'True', 'Contrat18000020', '2018-12-29', '2018-12-29', '2018-12-29', '2018-12-29', 'M', 1490, '', 'ACT', 'T', 0),
(33, 38, 192, 'True', 'True', 'Contrat19000001', '2019-01-13', '2019-03-09', '2019-01-13', '2019-01-13', 'M', 0, '', 'ACT', 'T', 0),
(34, 39, 190, 'False', 'False', 'Contrat19000003', '2019-01-19', '2019-01-19', '2019-01-19', '2019-01-19', 'M', 0, '', 'ACT', 'T', 0),
(35, 40, 189, 'False', 'False', 'Contrat19000004', '2019-01-24', '2019-01-24', '2019-01-24', '2019-01-24', 'M', 0, '', 'ACT', 'T', 0),
(36, 42, 186, 'False', 'False', 'Contrat19000006', '2019-01-28', '2019-01-28', '2019-01-28', '2019-01-28', 'M', 0, '', 'ACT', 'T', 0),
(37, 43, 2, 'True', 'true', 'Contrat19000007', '2019-02-11', '2019-02-11', '2019-02-11', '2019-02-11', 'M', 0, '', 'ACT', 'T', 0),
(38, 44, 123, 'True', 'True', 'Contrat19000008', '2019-02-18', '2019-02-18', '2019-02-18', '2019-02-18', 'M', 0, '', 'ACT', 'T', 0),
(39, 45, 185, 'True', 'True', 'Contrat19000013', '2019-03-14', '2019-03-14', '2019-03-14', '2020-03-14', 'M', 0, '', 'ACT', 'T', 0),
(40, 46, 194, 'True', 'True', 'Contrat19000014', '2019-03-26', '2019-03-26', '2019-03-26', '2020-03-26', 'M', 0, NULL, 'ACT', 'T', 0),
(41, 47, 213, 'True', 'false', 'Contrat19000015', '2019-08-28', '2019-08-29', '2019-08-29', '2019-12-31', 'M', 0, '', 'ACT', 'T', 0),
(42, 49, 207, 'True', 'True', 'Contrat19000016', '2019-08-28', '2019-09-30', '2019-08-28', '2019-08-28', 'M', 0, '', 'ACT', 'T', 0),
(43, 50, 211, 'True', 'True', 'Contrat19000017', '2019-05-28', '2019-09-04', '2019-09-04', '2019-09-04', 'M', 0, '', 'ACT', 'T', 0),
(44, 51, 43, 'True', 'True', 'Contrat19000018', '2019-09-25', '2019-09-25', '2019-09-25', '2019-09-25', 'M', 0, '', 'ACT', 'T', 0),
(45, 53, 207, 'True', 'False', 'Contrat19000019', '2019-11-20', '2019-11-18', '2019-11-18', '2020-11-18', 'M', 0, '', 'ACT', 'T', 0),
(46, 55, 228, 'True', 'True', 'Contrat200007', '2020-03-22', '2020-07-01', '2020-03-22', '2020-03-22', 'M', 10353, '', 'ACT', 'T', 0),
(47, 56, 213, 'False', 'False', 'Contrat200002', '2020-03-26', '2020-03-26', '2020-03-26', '2020-03-26', 'M', 0, '', 'ACT', 'T', 0),
(48, 57, 558, 'True', 'True', 'Contrat200003', '2020-04-07', '2020-04-07', '2020-04-07', '2020-04-07', 'M', 0, '', 'ACT', 'T', 0),
(49, 58, 559, 'True', 'True', 'Contrat200004', '2020-04-17', '2020-04-17', '2020-04-17', '2020-04-17', '', 0, '', 'ACT', 'T', 0),
(50, 59, 226, 'True', 'True', 'Contrat200005', '2020-04-21', '2020-04-21', '2020-04-21', '2020-04-21', 'L', 0, '', 'ACT', 'T', 0),
(51, 60, 191, 'true', 'True', 'Contrat200006', '2020-04-28', '2020-04-28', '2020-04-28', '2020-07-27', '', 0, '', 'ACT', 'T', 0),
(52, 61, 563, 'True', 'True', '', '2020-04-28', '2020-04-28', '2020-04-28', '2020-04-28', '', 0, '', 'ACT', 'T', 0),
(53, 64, 156, 'True', 'True', 'CV200003', '2020-06-12', '2020-06-12', '2020-06-12', '2020-06-12', 'A', 0, '', 'ENC', 'T', 0);

-- --------------------------------------------------------

--
-- Structure de la table `web_facturation`
--

CREATE TABLE `web_facturation` (
  `ref_wfact` int(11) NOT NULL,
  `refacteur_wfact` int(11) DEFAULT NULL,
  `reffact_wfact` int(11) DEFAULT NULL,
  `annee_wfact` int(11) DEFAULT NULL,
  `date_wfact` date DEFAULT NULL,
  `typefact_wfact` varchar(100) DEFAULT NULL,
  `code_wfact` varchar(20) DEFAULT NULL,
  `refcontrat_wfact` int(11) DEFAULT NULL,
  `ligneun_wfact` varchar(200) DEFAULT NULL,
  `ttc_wfact` double DEFAULT NULL,
  `decheance_wfact` date DEFAULT NULL,
  `listebl_wfact` varchar(500) DEFAULT NULL,
  `etat_wfact` varchar(10) DEFAULT NULL,
  `detailencaisse_wfact` varchar(500) DEFAULT NULL,
  `flag_wfact` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_facturation`
--

INSERT INTO `web_facturation` (`ref_wfact`, `refacteur_wfact`, `reffact_wfact`, `annee_wfact`, `date_wfact`, `typefact_wfact`, `code_wfact`, `refcontrat_wfact`, `ligneun_wfact`, `ttc_wfact`, `decheance_wfact`, `listebl_wfact`, `etat_wfact`, `detailencaisse_wfact`, `flag_wfact`) VALUES
(1, 119, 96, 2017, '2017-01-10', 'AUTRE', 'FA170100088', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-02-09', '', 'RE', '18240', 'A'),
(2, 35, 13, 2017, '2017-01-24', 'CONFECTION', 'FA170300006', 0, '', 9450, '2017-03-30', '', 'AR', '', 'A'),
(3, 36, 43, 2017, '2017-01-26', 'CONFECTION', 'FA170100008', 0, 'Gant PVC anti-froid BL', 15246, NULL, '', 'AR', '', 'A'),
(4, 4, 44, 2017, '2017-01-26', 'ENTRETIEN', 'FA170100007', 0, 'Gaine de ventilation ', 4298.4, NULL, '', 'RE', '4298.4', 'A'),
(5, 119, 97, 2017, '2017-02-10', 'AUTRE', 'FA170200089', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-03-12', '', 'NC', '30280', 'A'),
(6, 35, 45, 2017, '2017-02-13', 'CONFECTION', 'FA170200009', 0, 'Blouse col tailleur SUBLIWEAR 4XL', 1834.56, NULL, '', 'AR', '', 'A'),
(7, 36, 46, 2017, '2017-02-21', 'AUTRE', 'FA170200010', 0, 'Dépôt de garantie contrat Location-Entretien', 15998.26, NULL, '', 'AR', '', 'A'),
(8, 35, 47, 2017, '2017-03-01', 'ENTRETIEN', 'FA170300011', 0, 'Blouse ', 957.36, NULL, '', 'AR', '', 'A'),
(9, 4, 48, 2017, '2017-03-01', 'ENTRETIEN', 'FA170300012', 0, 'Blouse Kimono TU BC', 3380.5, '2018-03-22', '', 'AR', '', 'A'),
(10, 4, 49, 2017, '2017-03-01', 'CONFECTION', 'FA170300013', 0, 'Blouse Kimono TU GR', 29938.68, NULL, '', 'RE', '29938.68', 'A'),
(11, 36, 50, 2017, '2017-03-01', 'LOCATION-ENTRETIEN', 'FA170300014', 0, 'Loyer Location-Entretien Fevrier 2017', 1250.03, NULL, '', 'AR', '', 'A'),
(12, 38, 51, 2017, '2017-03-01', 'AUTRE', 'FA170300015', 0, 'Dépôt de garantie contrat Location-Entretien', 31370.4, NULL, '', 'NC', '62740.8', 'A'),
(13, 119, 98, 2017, '2017-03-10', 'AUTRE', 'FA170300090', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-04-09', '', 'AR', '', 'A'),
(14, 1, 5, 2017, '2017-03-21', 'LOCATION-ENTRETIEN', 'FA1703001', 0, '', 0, '2017-04-20', '', 'RE', '0', 'A'),
(15, 33, 7, 2017, '2017-03-23', 'ENTRETIEN', 'FA1703003', 0, '', 0, '2017-03-23', '', 'RE', '', 'A'),
(16, 4, 15, 2017, '2017-03-31', 'ENTRETIEN', 'FA170300016', 0, '', 23078.11, '2017-08-15', '', 'RE', '23078.112', 'A'),
(17, 36, 16, 2017, '2017-03-31', 'LOCATION-ENTRETIEN', 'FA170300017', 0, '', 0, '2017-03-31', '', 'AN', '2632.8', 'A'),
(18, 36, 10, 2017, '2017-04-01', 'LOCATION-ENTRETIEN', 'FA1704001', 0, '', 11236.57, '2017-04-01', '', 'AN', '', 'A'),
(19, 119, 99, 2017, '2017-04-07', 'AUTRE', 'FA170400091', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-05-07', '', 'NC', '14000', 'A'),
(20, 4, 18, 2017, '2017-05-02', 'ENTRETIEN', 'FA170500019', 0, '', 36809.66, '2017-07-01', '', 'RE', '36809.66', 'A'),
(21, 36, 19, 2017, '2017-05-02', 'LOCATION-ENTRETIEN', 'FA170500020', 0, 'Tenue de production blanche', 11579, '2017-06-01', '', 'AR', '', 'A'),
(22, 35, 20, 2017, '2017-05-02', 'ENTRETIEN', 'FA170500021', 0, '', 965.4, '2017-06-01', '', 'AR', '', 'A'),
(23, 119, 100, 2017, '2017-05-09', 'AUTRE', 'FA170500092', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-06-08', '', 'RE', '18240', 'A'),
(24, 38, 23, 2017, '2017-05-31', 'LOCATION-ENTRETIEN', 'FA170500024', 0, 'LOYER MAI 2017 au prorata - Base: 10456.80 dhs', 2403.86, '2017-06-01', '', 'AR', '', 'A'),
(25, 4, 21, 2017, '2017-06-01', 'ENTRETIEN', 'FA170600022', 0, '', 37170.82, '2017-07-01', '', 'RE', '37170.82', 'A'),
(26, 33, 22, 2017, '2017-06-01', 'LOCATION-ENTRETIEN', 'FA170500023', 0, 'Confection Blouse BEN col chemisier L blanche', 191.99, '2017-06-01', '', 'RE', '191.99', 'A'),
(27, 35, 24, 2017, '2017-06-01', 'ENTRETIEN', 'FA170600025', 0, '', 1056.84, '2017-07-01', '', 'AR', '', 'A'),
(28, 35, 25, 2017, '2017-06-30', 'ENTRETIEN', 'FA170600026', 0, '', 512.88, '2017-07-30', '', 'AR', '', 'A'),
(29, 38, 26, 2017, '2017-06-30', 'LOCATION-ENTRETIEN', 'FA170600027', 0, 'Loyer Hebdomadaire Location-Entretien Vêtements Professionnels', 10456.81, '2017-07-30', '', 'AN', '', 'A'),
(30, 4, 27, 2017, '2017-06-30', 'ENTRETIEN', 'FA170600028', 0, '', 29120.59, '2017-07-30', '', 'RE', '29120.59', 'A'),
(31, 4, 28, 2017, '2017-07-03', 'ENTRETIEN', 'FA170700029', 0, '', 29120.59, '2017-08-15', '', 'RE', '', 'A'),
(32, 119, 101, 2017, '2017-07-10', 'AUTRE', 'FA170700093', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-08-09', '', 'NC', '29240', 'A'),
(33, 58, 29, 2017, '2017-07-13', 'CONFECTION', 'FA170700030', 0, '', 2000, '2017-08-15', '', 'RE', '', 'A'),
(34, 38, 31, 2017, '2017-07-28', 'LOCATION-ENTRETIEN', 'FA170700032', 0, 'Loyer Hebdomadaire Location-Entretien Vêtements Professionnels', 10456.81, '2017-08-27', '', 'AR', '', 'A'),
(35, 35, 32, 2017, '2017-07-28', 'ENTRETIEN', 'FA170700033', 0, '', 321.12, '2017-08-27', '', 'AR', '', 'A'),
(36, 4, 30, 2017, '2017-07-31', 'ENTRETIEN', 'FA170700031', 0, '', 3585.79, '2018-03-22', '', 'RE', '3585.79', 'A'),
(37, 35, 33, 2017, '2017-07-31', 'CONFECTION', 'FA170700034', 0, '', 9888, '2017-07-31', '', 'SUS', '', 'A'),
(38, 66, 34, 2017, '2017-08-07', 'ENTRETIEN', 'FA170800035', 0, '', 576, '2017-08-07', '', 'RE', '576', 'A'),
(39, 119, 102, 2017, '2017-08-09', 'AUTRE', 'FA170800094', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-09-08', '', 'NC', '22460', 'A'),
(40, 72, 35, 2017, '2017-08-15', 'LOCATION-ENTRETIEN', 'FA170800036', 0, '', 0, '2017-08-15', '', 'RE', '0', 'A'),
(41, 38, 36, 2017, '2017-08-31', 'LOCATION-ENTRETIEN', 'FA170800037', 0, 'Contrat n° C0060217-01-01', 10456.81, '2017-09-30', '', 'RE', '10456.81', 'A'),
(42, 35, 37, 2017, '2017-08-31', 'CONFECTION', 'FA170800038', 0, 'ANNULEE', 0, '2017-08-31', '', 'AN', '', 'A'),
(43, 66, 38, 2017, '2017-08-31', 'ENTRETIEN', 'FA170800039', 0, '', 1219.2, '2017-09-30', '', 'RE', '1219.2', 'A'),
(44, 119, 103, 2017, '2017-09-07', 'AUTRE', 'FA170900095', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-10-07', '', 'RE', '18240', 'A'),
(45, 35, 39, 2017, '2017-09-08', 'ENTRETIEN', 'FA170900040', 0, '', 936.48, '2017-10-08', '', 'AR', '', 'A'),
(46, 38, 40, 2017, '2017-10-02', 'LOCATION-ENTRETIEN', 'FA171000041', 0, 'Contrat n° C0060217-01-01', 10456.81, '2017-11-01', '', 'AR', '', 'A'),
(47, 66, 41, 2017, '2017-10-02', 'ENTRETIEN', 'FA171000042', 0, '', 709.2, '2017-11-01', '', 'RE', '709.2', 'A'),
(48, 35, 42, 2017, '2017-10-03', 'ENTRETIEN', 'FA171000043', 0, '', 458.52, '2017-11-02', '', 'AR', '', 'A'),
(49, 119, 104, 2017, '2017-10-09', 'AUTRE', 'FA171000096', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-11-08', '', 'ENCE', '17500', 'A'),
(50, 58, 52, 2017, '2017-10-23', 'CONFECTION', 'FA171000044', 0, '', 5550.4, '2017-10-23', '', 'RE', '5550.4', 'A'),
(51, 92, 53, 2017, '2017-10-24', 'ENTRETIEN', 'FA171000045', 0, '', 0, '2017-10-24', '', 'RE', '', 'A'),
(52, 72, 54, 2017, '2017-11-01', 'LOCATION-ENTRETIEN', 'FA171100046', 0, 'Loyer hebdomadaire Location-Entretien Vêtements professionnels', 3972.22, '2017-12-01', '', 'RE', '3972.21', 'A'),
(53, 38, 55, 2017, '2017-11-01', 'LOCATION-ENTRETIEN', 'FA171100047', 0, 'Loyer hebdomadaire Location-Entretien Vêtements professionnels', 10456.81, '2017-12-01', '', 'RE', '10456.81', 'A'),
(54, 43, 56, 2017, '2017-11-01', 'ENTRETIEN', 'FA171100048', 0, '', 1242.36, '2017-12-01', '', 'RE', '1242.36', 'A'),
(55, 35, 57, 2017, '2017-11-01', 'ENTRETIEN', 'FA171100049', 0, '', 1197.96, '2017-12-01', '', 'AR', '', 'A'),
(56, 66, 58, 2017, '2017-11-01', 'ENTRETIEN', 'FA171100050', 0, '', 2288.4, '2017-12-01', '', 'RE', '1588.4', 'A'),
(57, 95, 59, 2017, '2017-11-01', 'ENTRETIEN', 'FA171100051', 0, '', 108, '2017-12-01', '', 'RE', '108', 'A'),
(58, 119, 105, 2017, '2017-11-06', 'AUTRE', 'FA171100097', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2017-12-06', '', 'NC', '26240', 'A'),
(59, 60, 60, 2017, '2017-11-16', 'CONFECTION', 'FA171100052', 0, '', 250408.8, '2017-11-16', '', 'RE', '250408.8', 'A'),
(60, 35, 61, 2017, '2017-11-30', 'ENTRETIEN', 'FA171100053', 0, '', 966, '2017-12-30', '', 'AR', '', 'A'),
(61, 43, 62, 2017, '2017-11-30', 'ENTRETIEN', 'FA171100054', 0, '', 1927.08, '2017-12-30', '', 'RE', '1927.08', 'A'),
(62, 72, 63, 2017, '2017-11-30', 'LOCATION-ENTRETIEN', 'FA171100055', 0, 'Loyer hebdomadaire Location-Entretien Vêtements professionnels', 3972.22, '2017-12-30', '', 'RE', '3972.21', 'A'),
(63, 38, 64, 2017, '2017-11-30', 'LOCATION-ENTRETIEN', 'FA171100056', 0, 'Loyer hebdomadaire Location-Entretien Vêtements professionnels', 10456.81, '2017-12-30', '', 'AR', '', 'A'),
(64, 66, 65, 2017, '2017-11-30', 'ENTRETIEN', 'FA171100057', 0, '', 1550.4, '2017-12-30', '', 'RE', '3100.8', 'A'),
(65, 119, 106, 2017, '2017-12-03', 'AUTRE', 'FA171200098', 0, 'Mise à disposition de personnel pour aménagement', 18240, '2018-01-02', '', 'RE', '18240', 'A'),
(66, 72, 66, 2017, '2017-12-26', 'LOCATION-ENTRETIEN', 'FA171200058', 0, 'Loyer Location-Entretien Vêtements professionnels', 3972.22, '2018-01-25', '', 'RE', '3972.21', 'A'),
(67, 38, 67, 2017, '2017-12-26', 'LOCATION-ENTRETIEN', 'FA171200059', 0, 'Loyer Location-Entretien vêtements professionnels', 10456.81, '2018-01-25', '', 'RE', '10456.81', 'A'),
(68, 43, 68, 2017, '2017-12-31', 'ENTRETIEN', 'FA171200060', 0, 'Période Du 2017-12-01 Au 2017-12-31', 2271.72, '2018-01-30', '', 'RE', '2271.72', 'A'),
(69, 35, 69, 2017, '2017-12-31', 'ENTRETIEN', 'FA171200061', 0, '', 722.64, '2017-12-31', '', 'AR', '', 'A'),
(70, 66, 70, 2017, '2017-12-31', 'ENTRETIEN', 'FA171200062', 0, '', 1741.2, '2018-01-30', '', 'RE', '1741.2', 'A'),
(71, 4, 85, 2017, '2017-12-31', 'CONFECTION', 'FA171200077', 0, '', 48194.1, '2018-02-28', '', 'RE', '48194.1', 'A'),
(72, 97, 71, 2018, '2018-01-03', 'CONFECTION', 'FA1801001', 0, '', 0, '2018-01-03', '', 'RE', '', 'A'),
(73, 45, 73, 2018, '2018-01-03', 'CONFECTION', 'FA1801003', 0, '', 110887.2, '2018-01-03', '', 'RE', '110887.2', 'A'),
(74, 4, 74, 2018, '2018-01-03', 'ENTRETIEN', 'FA1801004', 0, 'Gaine technique', 4298.4, '2018-02-02', '', 'AR', '', 'A'),
(75, 97, 72, 2018, '2018-01-04', 'CONFECTION', 'FA1801002', 0, '', 35424, '2018-01-04', '', 'RE', '35424', 'A'),
(76, 43, 75, 2018, '2018-01-30', 'ENTRETIEN', 'FA1801005', 0, 'Pantalon blanc SOFADEX ', 2847.96, '2018-03-01', '', 'RE', '2847.96', 'A'),
(77, 43, 76, 2018, '2018-01-30', 'CONFECTION', 'FA1801006', 0, 'Retouche vêtements professionnels', 1008, '2018-03-01', '', 'RE', '1008', 'A'),
(78, 35, 77, 2018, '2018-01-30', 'ENTRETIEN', 'FA1801007', 0, '', 1146.36, '2018-03-01', '', 'AR', '', 'A'),
(79, 38, 78, 2018, '2018-01-30', 'LOCATION-ENTRETIEN', 'FA1801008', 0, 'Prestation Location-Entretien', 10456.81, '2018-03-01', '', 'RE', '10456.81', 'A'),
(80, 72, 79, 2018, '2018-01-30', 'LOCATION-ENTRETIEN', 'FA1801009', 0, 'Prestation Location-Entretien', 3972.22, '2018-03-01', '', 'RE', '3972.21', 'A'),
(81, 66, 80, 2018, '2018-01-31', 'ENTRETIEN', 'FA1801010', 0, '', 1872, '2018-03-02', '', 'RE', '1872', 'A'),
(82, 45, 81, 2018, '2018-02-02', 'CONFECTION', 'FA1802001', 0, 'Doudoune sans manches Taille M', 1470, '2018-03-04', '', 'RE', '1470', 'A'),
(83, 107, 83, 2018, '2018-02-02', 'CONFECTION', 'FA1802003', 0, 'Manteau laine noir Taille 50', 4968, '2018-03-04', '', 'AR', '', 'A'),
(84, 99, 84, 2018, '2018-02-07', 'CONFECTION', 'FA1802004', 0, '', 3744, '2018-03-09', '', 'AR', '', 'A'),
(85, 4, 86, 2018, '2018-02-15', 'HYGIENE PRO', 'FA1802005', 0, 'Papier Essuie main à dévidage central pure ouate BC lisse 150m2 2 plis poids 1kg', 6828.96, '2018-03-17', '', 'RE', '6828.96', 'A'),
(86, 66, 87, 2018, '2018-02-16', 'HYGIENE PRO', 'FA1802006', 0, 'Charlotte blanche à usage unique PP-27 ', 2640, '2018-03-18', '', 'RE', '2640', 'A'),
(87, 60, 82, 2018, '2018-02-19', 'CONFECTION', 'FA1802002', 0, '', 190317.6, '2018-02-19', '', 'RE', '190317.6', 'A'),
(88, 43, 88, 2018, '2018-02-20', 'CONFECTION', 'FA1802007', 0, 'Parka HV 450', 5940, '2018-03-22', '', 'RE', '5940', 'A'),
(89, 98, 89, 2018, '2018-02-26', 'CONFECTION', 'FA1802008', 0, '', 7818, '2018-03-28', '', 'RE', '7818', 'A'),
(90, 120, 90, 2018, '2018-02-26', 'CONFECTION', 'FA1802009', 0, 'Pantalon TOUPARGEL premier choix', 9525, '2018-03-28', '', 'RE', '9525', 'A'),
(91, 38, 91, 2018, '2018-02-28', 'LOCATION-ENTRETIEN', 'FA1802010', 0, 'Prestation Location-Entretien Vêtements professionnels', 10456.81, '2018-03-30', '', 'AR', '', 'A'),
(92, 72, 92, 2018, '2018-02-28', 'LOCATION-ENTRETIEN', 'FA1802011', 0, 'Prestation Location-Entretien Vêtements professionnels', 3972.22, '2018-03-30', '', 'RE', '3972.21', 'A'),
(93, 35, 93, 2018, '2018-02-28', 'ENTRETIEN', 'FA1802012', 0, '', 927.96, '2018-03-30', '', 'AR', '', 'A'),
(94, 43, 94, 2018, '2018-02-28', 'ENTRETIEN', 'FA1802013', 0, '', 2853.96, '2018-03-30', '', 'RE', '2853.96', 'A'),
(95, 66, 95, 2018, '2018-02-28', 'ENTRETIEN', 'FA1802014', 0, '', 2044.8, '2018-03-30', '', 'RE', '2044.8', 'A'),
(96, 4, 107, 2018, '2018-03-01', 'CONFECTION', 'FA1803001', 0, '', 79200, '2018-03-31', '', 'RE', '79200', 'A'),
(97, 4, 108, 2018, '2018-03-01', 'ENTRETIEN', 'FA1803002', 0, '', 4752.5, '2018-03-31', '', 'RE', '4752.5', 'A'),
(98, 4, 109, 2018, '2018-03-22', 'CONFECTION', 'FA1803003', 0, 'Pantalon noir doublé polaire anti-froid avec numéro', 276220.8, '2018-04-21', '', 'RE', '276220.8', 'A'),
(99, 35, 112, 2018, '2018-03-26', 'ENTRETIEN', 'FA1803006', 0, '', 920.4, '2018-04-25', '', 'AR', '', 'A'),
(100, 43, 113, 2018, '2018-03-26', 'ENTRETIEN', 'FA1803007', 0, '', 2803.32, '2018-04-25', '', 'RE', '2803.32', 'A'),
(101, 35, 114, 2018, '2018-03-26', 'HYGIENE PRO', 'FA1803008', 0, 'Distributeur à savon en plastique ABS Noir. Contenance 1 L', 3734.4, '2018-04-25', '', 'AR', '', 'A'),
(102, 38, 110, 2018, '2018-03-27', 'LOCATION-ENTRETIEN', 'FA1803004', 0, 'Prestation Location-Entretien Vêtements professionnels', 10456.81, '2018-04-26', '', 'RE', '10456.81', 'A'),
(103, 72, 111, 2018, '2018-03-27', 'LOCATION-ENTRETIEN', 'FA1803005', 0, 'Prestation Location-Entretien Vêtements professionnels', 3972.22, '2018-04-26', '', 'RE', '3972.21', 'A'),
(104, 66, 116, 2018, '2018-03-30', 'ENTRETIEN', 'FA1803009', 0, '', 1507.2, '2018-04-29', '', 'RE', '', 'A'),
(105, 4, 115, 2018, '2018-03-31', 'ENTRETIEN', 'FA1804001', 0, '', 23348.16, '2018-05-30', '', 'RE', '', 'A'),
(106, 38, 117, 2018, '2018-04-30', 'LOCATION-ENTRETIEN', 'FA1804002', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-05-30', '', 'RE', '10787.55', 'A'),
(107, 72, 118, 2018, '2018-04-30', 'LOCATION-ENTRETIEN', 'FA1804003', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-05-30', '', 'AR', '', 'A'),
(108, 66, 119, 2018, '2018-04-30', 'ENTRETIEN', 'FA1804004', 0, '', 2374.8, '2018-05-30', '', 'RE', '2374.8', 'A'),
(109, 4, 120, 2018, '2018-04-30', 'ENTRETIEN', 'FA1804005', 0, '', 32607.86, '2018-05-30', '', 'RE', '32607.86', 'A'),
(110, 43, 121, 2018, '2018-04-30', 'ENTRETIEN', 'FA1804006', 0, '', 2768.76, '2018-05-30', '', 'RE', '2768.76', 'A'),
(111, 35, 122, 2018, '2018-04-30', 'ENTRETIEN', 'FA1804007', 0, '', 948.72, '2018-05-30', '', 'AR', '', 'A'),
(112, 99, 123, 2018, '2018-05-07', 'CONFECTION', 'FA1805001', 0, '', 1406.4, '2018-06-06', '', 'AR', '', 'A'),
(113, 134, 124, 2018, '2018-05-10', 'ENTRETIEN', 'FA1805002', 0, '', 568.8, '2018-06-09', '', 'RE', '568.8', 'A'),
(114, 134, 125, 2018, '2018-05-10', 'ENTRETIEN', 'FA1805003', 0, '', 916.92, '2018-06-09', '', 'RE', '916.92', 'A'),
(115, 35, 126, 2018, '2018-05-21', 'HYGIENE PRO', 'FA1805004', 0, 'Raclette sol professionnelle mousse blanche 55 cm pour hygiène HACCP avec bouchon vert', 3682.68, '2018-06-20', '', 'RE', '3682.68', 'A'),
(116, 38, 127, 2018, '2018-05-28', 'LOCATION-ENTRETIEN', 'FA1805005', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-06-27', '', 'RE', '10787.55', 'A'),
(117, 72, 128, 2018, '2018-05-28', 'LOCATION-ENTRETIEN', 'FA1805006', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-06-27', '', 'RE', '4522.61', 'A'),
(118, 43, 129, 2018, '2018-05-28', 'ENTRETIEN', 'FA1805007', 0, '', 3373.56, '2018-06-27', '', 'RE', '3373.56', 'A'),
(119, 35, 130, 2018, '2018-05-28', 'ENTRETIEN', 'FA1805008', 0, '', 1240.08, '2018-06-27', '', 'AR', '', 'A'),
(120, 66, 131, 2018, '2018-05-28', 'ENTRETIEN', 'FA1805009', 0, '', 1821.6, '2018-06-27', '', 'RE', '1821.6', 'A'),
(121, 4, 132, 2018, '2018-05-28', 'ENTRETIEN', 'FA1805010', 0, '', 34067.83, '2018-06-27', '', 'RE', '34067.83', 'A'),
(122, 4, 133, 2018, '2018-05-31', 'CONFECTION', 'FA1805011', 0, 'Gilet secouriste taille L', 32280, '2018-06-30', '', 'RE', '32280', 'A'),
(123, 95, 134, 2018, '2018-06-08', 'CONFECTION', 'FA1806001', 0, 'Blouse blanche MARAQUA WATERS', 660, '2018-07-08', '', 'RE', '660', 'A'),
(124, 136, 135, 2018, '2018-06-12', 'CONFECTION', 'FA1806002', 0, '', 23924.4, '2018-07-12', '', 'RE', '', 'A'),
(125, 38, 136, 2018, '2018-06-25', 'LOCATION-ENTRETIEN', 'FA1806003', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-07-25', '', 'RE', '10787.55', 'A'),
(126, 72, 137, 2018, '2018-06-25', 'LOCATION-ENTRETIEN', 'FA1806004', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-07-25', '', 'RE', '4522.61', 'A'),
(127, 35, 138, 2018, '2018-06-25', 'ENTRETIEN', 'FA1806005', 0, '', 998.28, '2018-07-25', '', 'AR', '', 'A'),
(128, 43, 139, 2018, '2018-06-25', 'ENTRETIEN', 'FA1806006', 0, '', 2841.96, '2018-07-25', '', 'RE', '2841.96', 'A'),
(129, 4, 140, 2018, '2018-06-29', 'ENTRETIEN', 'FA1806007', 0, '', 28476.54, '2018-06-29', '', 'RE', '28476.54', 'A'),
(130, 66, 141, 2018, '2018-06-29', 'ENTRETIEN', 'FA1806008', 0, '', 1417.2, '2018-07-29', '', 'RE', '1417.2', 'A'),
(131, 4, 142, 2018, '2018-07-13', 'CONFECTION', 'FA1807001', 0, 'Casquette avec broderie', 5880, '2018-08-12', '', 'RE', '5880', 'A'),
(132, 4, 143, 2018, '2018-07-13', 'ENTRETIEN', 'FA1807002', 0, '', 8412, '2018-08-12', '', 'RE', '8412', 'A'),
(133, 38, 144, 2018, '2018-07-31', 'LOCATION-ENTRETIEN', 'FA1807003', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-08-30', '', 'RE', '10787.55', 'A'),
(134, 72, 145, 2018, '2018-07-31', 'LOCATION-ENTRETIEN', 'FA1807004', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-08-30', '', 'RE', '4522.61', 'A'),
(135, 43, 146, 2018, '2018-07-31', 'ENTRETIEN', 'FA1807005', 0, '', 3635.64, '2018-08-30', '', 'RE', '3635.64', 'A'),
(136, 35, 147, 2018, '2018-07-31', 'ENTRETIEN', 'FA1807006', 0, '', 1274.4, '2018-08-30', '', 'AR', '', 'A'),
(137, 35, 148, 2018, '2018-07-31', 'HYGIENE PRO', 'FA1807007', 0, '', 816, '2018-08-30', '', 'AR', '', 'A'),
(138, 66, 149, 2018, '2018-07-31', 'ENTRETIEN', 'FA1807008', 0, '', 1826.4, '2018-08-30', '', 'RE', '1826.4', 'A'),
(139, 156, 150, 2018, '2018-08-13', 'CONFECTION', 'FA1808001', 0, '', 4284, '2018-09-12', '', 'RE', '4284', 'A'),
(140, 156, 151, 2018, '2018-08-17', 'CONFECTION', 'FA1808002', 0, 'Apposition écusson sur produit fini Labomag', 554.4, '2018-09-16', '', 'RE', '554.4', 'A'),
(141, 38, 152, 2018, '2018-08-28', 'LOCATION-ENTRETIEN', 'FA1808003', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-09-27', '', 'RE', '10787.55', 'A'),
(142, 72, 153, 2018, '2018-08-28', 'LOCATION-ENTRETIEN', 'FA1808004', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-09-27', '', 'RE', '4522.61', 'A'),
(143, 43, 154, 2018, '2018-08-28', 'ENTRETIEN', 'FA1808005', 0, '', 1657.8, '2018-09-27', '', 'RE', '1657.8', 'A'),
(144, 35, 155, 2018, '2018-08-28', 'ENTRETIEN', 'FA1808006', 0, '', 743.4, '2018-09-27', '', 'AR', '', 'A'),
(145, 66, 156, 2018, '2018-08-28', 'ENTRETIEN', 'FA1808007', 0, '', 1206, '2018-09-27', '', 'RE', '1206', 'A'),
(146, 35, 157, 2018, '2018-09-03', 'HYGIENE PRO', 'FA1809001', 0, 'Savon crème pour mains ', 691.2, '2018-10-03', '', 'AR', '', 'A'),
(147, 156, 158, 2018, '2018-09-05', 'CONFECTION', 'FA1809002', 0, '', 3570, '2018-10-05', '', 'RE', '3570', 'A'),
(148, 171, 159, 2018, '2018-09-07', 'CONFECTION', 'FA1809003', 0, '', 0, '2018-10-07', '', 'AN', '', 'A'),
(149, 172, 160, 2018, '2018-09-12', 'AUTRE', 'FA1809004', 0, 'Création de patronage - Modélisme', 18000, '2018-10-12', '', 'AR', '', 'A'),
(150, 103, 161, 2018, '2018-09-25', 'CONFECTION', 'FA1809005', 0, '', 73801.2, '2018-10-25', '', 'RE', '73801.2', 'A'),
(151, 57, 162, 2018, '2018-09-28', 'CONFECTION', 'FA1809006', 0, 'Tunique noire longue croisée col officier ', 3072, '2018-10-28', '', 'ENCE', '3044', 'A'),
(152, 38, 163, 2018, '2018-09-28', 'LOCATION-ENTRETIEN', 'FA1809007', 0, 'Prestation Location-Entretien Vêtements professionnels', 10787.54, '2018-10-28', '', 'RE', '10787.55', 'A'),
(153, 35, 165, 2018, '2018-09-28', 'ENTRETIEN', 'FA1809009', 0, '', 828.36, '2018-10-28', '', 'AR', '', 'A'),
(154, 43, 166, 2018, '2018-09-28', 'ENTRETIEN', 'FA1809010', 0, '', 2389.68, '2018-10-28', '', 'RE', '2389.68', 'A'),
(155, 169, 167, 2018, '2018-09-28', 'AUTRE', 'FA1809011', 0, 'Prestation Location-Entretien', 17871.49, '2018-10-28', '', 'RE', '17871.5', 'A'),
(156, 97, 168, 2018, '2018-10-01', 'CONFECTION', 'FA1810001', 0, '', 79490.4, '2018-10-31', '', 'RE', '39816', 'A'),
(157, 121, 169, 2018, '2018-10-01', 'ENTRETIEN', 'FA1810002', 28, '', 163.8, '2018-10-31', '', 'RE', '163.8', 'A'),
(158, 38, 170, 2018, '2018-10-01', 'AUTRE', 'FA1810003', 0, 'Modification de stock', 14524.94, '2018-10-01', '', 'RE', '14524.94', 'A'),
(159, 72, 171, 2018, '2018-10-01', 'AUTRE', 'FA1810004', 0, 'Modification de stock', 1651.18, '2018-10-31', '', 'RE', '1651.18', 'A'),
(160, 60, 172, 2018, '2018-10-02', 'CONFECTION', 'FA1810005', 0, 'Pantalon Homme ', 60091.2, '2018-11-01', '', 'RE', '60091.2', 'A'),
(161, 153, 173, 2018, '2018-10-24', 'LOCATION-ENTRETIEN', 'FA1810006', 0, 'Prestation Location-Entretien Vêtements professionnels', 6293.76, '2018-11-23', '', 'RE', '6293.75', 'A'),
(162, 121, 174, 2018, '2018-10-25', 'AUTRE', 'FA1810007', 0, '', 2500.8, '2018-11-24', '', 'RE', '2500.8', 'A'),
(163, 121, 175, 2018, '2018-10-29', 'ENTRETIEN', 'FA1810008', 28, '', 1077, '2018-11-28', '', 'RE', '1077', 'A'),
(164, 72, 164, 2018, '2018-10-30', 'LOCATION-ENTRETIEN', 'FA1809008', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-10-29', '', 'RE', '4522.61', 'A'),
(165, 38, 176, 2018, '2018-10-30', 'LOCATION-ENTRETIEN', 'FA1810009', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2018-11-29', '', 'RE', '15629.15', 'A'),
(166, 72, 177, 2018, '2018-10-30', 'LOCATION-ENTRETIEN', 'FA1810010', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-11-29', '', 'RE', '4522.61', 'A'),
(167, 173, 178, 2018, '2018-10-30', 'CONFECTION', 'FA1810011', 0, '', 15482.4, '2018-11-29', '', 'RE', '15482.4', 'A'),
(168, 43, 179, 2018, '2018-10-30', 'ENTRETIEN', 'FA1810012', 0, '', 3287.88, '2018-11-29', '', 'RE', '3287.88', 'A'),
(169, 35, 180, 2018, '2018-10-30', 'ENTRETIEN', 'FA1810013', 0, '', 1352.28, '2018-11-29', '', 'AR', '', 'A'),
(170, 169, 181, 2018, '2018-10-30', 'LOCATION-ENTRETIEN', 'FA1810014', 0, '', 200.45, '2018-11-29', '', 'AR', '', 'A'),
(171, 134, 182, 2018, '2018-11-01', 'ENTRETIEN', 'FA1811001', 0, '', 88.8, '2018-12-01', '', 'RE', '177.6', 'A'),
(172, 154, 185, 2018, '2018-11-09', 'CONFECTION', 'FA1811004', 0, 'Veste manches amovibles Taille : XS Bleu', 0, '2018-12-09', '', 'AN', '', 'A'),
(173, 35, 183, 2018, '2018-11-12', 'HYGIENE PRO', 'FA1811002', 0, 'Papier zig zag Econatural Havane Z', 1399.2, '2018-12-12', '', 'AR', '', 'A'),
(174, 154, 184, 2018, '2018-11-12', 'CONFECTION', 'FA1811003', 0, '', 0, '2018-12-12', '', 'AN', '', 'A'),
(175, 154, 186, 2018, '2018-11-12', 'CONFECTION', 'FA1811005', 0, 'Veste manches amovibles XS Bleu', 7689.6, '2018-12-12', '', 'RE', '7689.6', 'A'),
(176, 156, 187, 2018, '2018-11-12', 'CONFECTION', 'FA1811006', 0, 'Blouse labo Homme S Blanc', 4855.2, '2018-12-12', '', 'RE', '4855.2', 'A'),
(177, 57, 189, 2018, '2018-11-22', 'CONFECTION', 'FA1811008', 0, 'Tunique noire longue croisée col officier taille XL', 3072, '2018-11-22', '', 'AR', '', 'A'),
(178, 57, 188, 2018, '2018-11-23', 'CONFECTION', 'FA1811007', 0, '', 0, '2018-12-23', '', 'RE', '', 'A'),
(179, 35, 193, 2018, '2018-11-26', 'ENTRETIEN', 'FA1811012', 0, '', 1054.92, '2018-12-26', '', 'AR', '', 'A'),
(180, 38, 190, 2018, '2018-11-27', 'LOCATION-ENTRETIEN', 'FA1811009', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2018-12-27', '', 'AR', '', 'A'),
(181, 72, 191, 2018, '2018-11-27', 'LOCATION-ENTRETIEN', 'FA1811010', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2018-12-27', '', 'RE', '4522.61', 'A'),
(182, 43, 192, 2018, '2018-11-27', 'ENTRETIEN', 'FA1811011', 0, '', 2716.8, '2018-12-27', '', 'RE', '2716.8', 'A'),
(183, 35, 195, 2018, '2018-11-28', 'AUTRE', 'FA1811014', 0, 'Mise à disposition de personnel Auclair', 15000, '2018-12-28', '', 'AR', '', 'A'),
(184, 121, 194, 2018, '2018-11-30', 'ENTRETIEN', 'FA1811013', 28, '', 686.4, '2018-12-30', '', 'RE', '686.4', 'A'),
(185, 156, 196, 2018, '2018-12-03', 'CONFECTION', 'FA1812001', 0, 'Blouse homme Blanc', 10069.2, '2019-01-02', '', 'RE', '10069.2', 'A'),
(186, 72, 197, 2018, '2018-12-04', 'CONFECTION', 'FA1812002', 0, 'Coiffe plissée à revers  ', 1404, '2019-01-03', '', 'RE', '1404', 'A'),
(187, 156, 198, 2018, '2018-12-06', 'CONFECTION', 'FA1812003', 0, '', 142.8, '2019-01-05', '', 'RE', '142.8', 'A'),
(188, 156, 199, 2018, '2018-12-07', 'CONFECTION', 'FA1812004', 0, '', 0, '2019-01-06', '', 'RE', '', 'A'),
(189, 121, 200, 2018, '2018-12-10', 'AUTRE', 'FA1812005', 0, '', 201.6, '2019-01-09', '', 'RE', '201.6', 'A'),
(190, 156, 201, 2018, '2018-12-19', 'CONFECTION', 'FA1812006', 0, 'Apposition écusson sur produit fini Labomag', 9060, '2019-01-18', '', 'RE', '9060', 'A'),
(191, 4, 202, 2018, '2018-12-24', 'CONFECTION', 'FA1812007', 0, '', 10326, '2019-01-23', '', 'RE', '10326', 'A'),
(192, 192, 203, 2018, '2018-12-24', 'AUTRE', 'FA1812008', 0, 'Dépôt de garantie Prestation Location-Entretien', 14422.26, '2019-01-23', '', 'RE', '14422.26', 'A'),
(193, 123, 204, 2018, '2018-12-28', 'CONFECTION', 'FA1812009', 0, 'Acompte commande n° LRALBC1812006', 73506.29, '2019-01-27', '', 'AR', '', 'A'),
(194, 194, 205, 2018, '2018-12-28', 'CONFECTION', 'FA1812010', 46, 'Acompte commande n° RYALBC1412141', 31478.16, '2019-01-27', '', 'AR', '', 'A'),
(195, 173, 208, 2018, '2018-12-29', 'CONFECTION', 'FA1812013', 0, '', 11898, '2019-01-28', '', 'RE', '11898', 'A'),
(196, 38, 206, 2018, '2018-12-31', 'LOCATION-ENTRETIEN', 'FA1812011', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2019-01-30', '', 'RE', '15629.15', 'A'),
(197, 72, 207, 2018, '2018-12-31', 'LOCATION-ENTRETIEN', 'FA1812012', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-01-30', '', 'RE', '4522.61', 'A'),
(198, 153, 209, 2018, '2018-12-31', 'LOCATION-ENTRETIEN', 'FA1812014', 0, 'Prestation Location-Entretien Vêtements professionnels', 1639.86, '2019-01-30', '', 'RE', '1639.86', 'A'),
(199, 35, 210, 2018, '2018-12-31', 'ENTRETIEN', 'FA1812015', 0, '', 1062, '2019-01-30', '', 'AR', '', 'A'),
(200, 121, 211, 2018, '2018-12-31', 'ENTRETIEN', 'FA1812016', 28, '', 655.8, '2019-01-30', '', 'RE', '655.8', 'A'),
(201, 43, 212, 2018, '2018-12-31', 'ENTRETIEN', 'FA1812017', 0, '', 2693.4, '2019-01-30', '', 'RE', '2693.4', 'A'),
(202, 121, 213, 2018, '2018-12-31', 'AUTRE', 'FA1812018', 0, '', 48, '2019-01-30', '', 'RE', '48', 'A'),
(203, 189, 214, 2019, '2019-01-10', 'CONFECTION', 'FG1901001', 0, 'Tunique SARA à encolure carré', 20829.6, '2019-02-09', '', 'AR', '', 'A'),
(204, 189, 227, 2019, '2019-01-10', 'AUTRE', 'FT1901012', 0, '', 0, '2019-02-09', '', 'AN', '', 'A'),
(205, 173, 215, 2019, '2019-01-17', 'ENTRETIEN', 'FT1901001', 0, '', 107.94, '2019-02-16', '', 'RE', '107.94', 'A'),
(206, 200, 216, 2019, '2019-01-18', 'CONFECTION', 'FG1901002', 0, '', 2388, '2019-02-17', '', 'AR', '', 'A'),
(207, 173, 217, 2019, '2019-01-25', 'ENTRETIEN', 'FT1901002', 0, '', 195.84, '2019-02-24', '', 'RE', '195.84', 'A'),
(208, 38, 218, 2019, '2019-01-29', 'LOCATION-ENTRETIEN', 'FT1901003', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2019-02-28', '', 'AR', '', 'A'),
(209, 72, 219, 2019, '2019-01-29', 'LOCATION-ENTRETIEN', 'FT1901004', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-02-28', '', 'RE', '4522.61', 'A'),
(210, 43, 220, 2019, '2019-01-29', 'ENTRETIEN', 'FT1901005', 0, '', 1737.72, '2019-02-28', '', 'RE', '1737.72', 'A'),
(211, 35, 221, 2019, '2019-01-29', 'ENTRETIEN', 'FT1901006', 0, '', 1040.76, '2019-02-28', '', 'AR', '', 'A'),
(212, 153, 222, 2019, '2019-01-29', 'LOCATION-ENTRETIEN', 'FT1901007', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-02-28', '', 'RE', '2097.92', 'A'),
(213, 121, 223, 2019, '2019-01-29', 'ENTRETIEN', 'FT1901008', 28, '', 534.6, '2019-02-28', '', 'RE', '534.6', 'A'),
(214, 104, 226, 2019, '2019-01-29', 'LOCATION-ENTRETIEN', 'FT1901011', 0, 'Prestation Location-entretien Vêtements professionnels', 544.97, '2019-02-28', '', 'AR', '', 'A'),
(215, 169, 224, 2019, '2019-01-31', 'LOCATION-ENTRETIEN', 'FT1901009', 0, '', 1621.13, '2019-03-02', '', 'AR', '', 'A'),
(216, 121, 225, 2019, '2019-01-31', 'AUTRE', 'FT1901010', 0, '', 124.8, '2019-02-28', '', 'RE', '124.8', 'A'),
(217, 169, 229, 2019, '2019-02-07', 'ENTRETIEN', 'FT1902002', 0, 'Prestation ENTRETIEN JANVIER_2019', 134.88, '2019-03-09', '', 'AR', '', 'A'),
(218, 190, 230, 2019, '2019-02-07', 'CONFECTION', 'FT1902001', 0, 'Blouson noir', 23928, '2019-03-09', 'BL190025 (21/01/2019)@BL190057 (07/02/2019)', 'RE', '23928', 'A'),
(219, 173, 231, 2019, '2019-02-11', 'ENTRETIEN', 'FT1902003', 0, '', 107.94, '2019-03-13', '', 'RE', '107.94', 'A'),
(220, 121, 232, 2019, '2019-02-12', 'AUTRE', 'FT1902004', 0, '', 4924.8, '2019-03-14', '', 'AR', '', 'A'),
(221, 198, 233, 2019, '2019-02-12', 'CONFECTION', 'FG1902001', 0, '', 2524.8, '2019-03-14', '', 'AR', '', 'A'),
(222, 43, 238, 2019, '2019-02-25', 'ENTRETIEN', 'FT1902009', 0, '', 1391.52, '2019-03-27', '', 'RE', '1391.52', 'A'),
(223, 38, 234, 2019, '2019-02-26', 'LOCATION-ENTRETIEN', 'FT1902005', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2019-03-28', '', 'AR', '', 'A'),
(224, 72, 235, 2019, '2019-02-26', 'LOCATION-ENTRETIEN', 'FT1902006', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-03-28', '', 'RE', '4522.61', 'A'),
(225, 173, 239, 2019, '2019-02-26', 'ENTRETIEN', 'FT1902010', 0, 'Delta Minimum forfaitaire', 1788, '2019-03-28', '', 'RE', '1788', 'A'),
(226, 35, 240, 2019, '2019-02-26', 'ENTRETIEN', 'FT1902011', 0, '', 1076.16, '2019-03-28', '', 'AR', '', 'A'),
(227, 203, 244, 2019, '2019-02-26', 'ENTRETIEN', 'FT1902015', 0, 'Prestation d\'entretien ', 708, '2019-03-11', '', 'AR', '', 'A'),
(228, 35, 245, 2019, '2019-02-26', 'HYGIENE PRO', 'FT1902016', 0, 'Papier zig zag Econatural Havane Z', 1507.2, '2019-03-28', '', 'AR', '', 'A'),
(229, 169, 236, 2019, '2019-02-28', 'LOCATION-ENTRETIEN', 'FT1902007', 0, '', 2941.57, '2019-03-30', '', 'SUS', '', 'A'),
(230, 153, 237, 2019, '2019-02-28', 'LOCATION-ENTRETIEN', 'FT1902008', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-03-30', '', 'RE', '2097.92', 'A'),
(231, 121, 241, 2019, '2019-02-28', 'ENTRETIEN', 'FT1902012', 28, '', 472.8, '2019-03-30', '', 'RE', '472.8', 'A'),
(232, 4, 242, 2019, '2019-02-28', 'ENTRETIEN', 'FT1902013', 0, '', 2441.38, '2019-03-30', '', 'RE', '2441.38', 'A'),
(233, 104, 243, 2019, '2019-02-28', 'LOCATION-ENTRETIEN', 'FT1902014', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-03-11', '', 'AR', '', 'A'),
(234, 173, 248, 2019, '2019-02-28', 'CONFECTION', 'FG1902002', 0, '', 2628, '2019-03-30', '', 'AR', '', 'A'),
(235, 192, 249, 2019, '2019-03-08', 'CONFECTION', 'FG1903001', 0, 'Coiffe ANNA (plissée à revers)', 1404, '2019-04-07', '', 'AR', '', 'A'),
(236, 186, 250, 2019, '2019-03-08', 'CONFECTION', 'FG1903002', 0, '', 13127.66, '2019-04-07', '', 'AR', '', 'A'),
(237, 156, 251, 2019, '2019-03-12', 'CONFECTION', 'FG1903003', 0, '', 571.2, '2019-04-11', '', 'AR', '', 'A'),
(238, 123, 252, 2019, '2019-03-19', 'CONFECTION', 'FG1903004', 0, '', 81940.8, '2019-04-18', '', 'AR', '', 'A'),
(239, 194, 253, 2019, '2019-03-20', 'CONFECTION', 'FG1903005', 0, '', 38390.4, '2019-04-19', '', 'AR', '', 'A'),
(240, 38, 256, 2019, '2019-03-22', 'LOCATION-ENTRETIEN', 'FT1903001', 0, 'Prestation Location-Entretien Vêtements professionnels', 15629.15, '2019-04-21', '', 'AR', '', 'A'),
(241, 72, 257, 2019, '2019-03-22', 'LOCATION-ENTRETIEN', 'FT1903002', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-04-21', '', 'RE', '4522.61', 'A'),
(242, 186, 254, 2019, '2019-03-23', 'CONFECTION', 'FG1903006', 0, '', 4286.4, '2019-03-23', '', 'AR', '', 'A'),
(243, 192, 258, 2019, '2019-03-27', 'LOCATION-ENTRETIEN', 'FT1903003', 0, 'Prestation Location-Entretien Vêtements professionnels', 2403.71, '2019-04-26', '', 'RE', '2403.71', 'A'),
(244, 35, 260, 2019, '2019-03-27', 'ENTRETIEN', 'FT1903005', 0, '', 1083.24, '2019-04-26', '', 'AR', '', 'A'),
(245, 43, 264, 2019, '2019-03-27', 'ENTRETIEN', 'FT1903009', 0, '', 1664.88, '2019-04-26', '', 'RE', '1664.88', 'A'),
(246, 169, 263, 2019, '2019-03-29', 'LOCATION-ENTRETIEN', 'FT1903008', 0, '', 2941.57, '2019-04-28', '', 'SUS', '', 'A'),
(247, 173, 265, 2019, '2019-03-29', 'ENTRETIEN', 'FT1903010', 0, 'Delta Minimum forfaitaire', 1788, '2019-04-28', '', 'RE', '1788', 'A'),
(248, 4, 266, 2019, '2019-03-29', 'ENTRETIEN', 'FT1903011', 0, 'Période Du 2019-03-01 Au 2019-03-31', 18884.9, '2019-04-28', '', 'RE', '18884.9', 'A'),
(249, 104, 259, 2019, '2019-03-30', 'LOCATION-ENTRETIEN', 'FT1903004', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-04-29', '', 'RE', '11068.49', 'A'),
(250, 121, 261, 2019, '2019-03-31', 'ENTRETIEN', 'FT1903006', 28, '', 499.2, '2019-04-30', '', 'RE', '499.2', 'A'),
(251, 153, 262, 2019, '2019-03-31', 'LOCATION-ENTRETIEN', 'FT1903007', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-04-30', '', 'RE', '2097.92', 'A'),
(252, 185, 255, 2019, '2019-04-05', 'ENTRETIEN', 'FT1904001', 0, '', 9142.32, '2019-04-19', '', 'RE', '', 'A'),
(253, 192, 267, 2019, '2019-04-12', 'CONFECTION', 'FT1904002', 0, 'Coiffe ANNA (plissée à revers)  ', 936, '2019-05-12', '', 'RE', '936', 'A'),
(254, 185, 268, 2019, '2019-04-20', 'ENTRETIEN', 'FT1904003', 0, '', 8291.7, '2019-04-21', 'BL190213 (18/04/2019)', 'RE', '8291.7', 'A'),
(255, 153, 269, 2019, '2019-04-29', 'LOCATION-ENTRETIEN', 'FT1904004', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-05-29', '', 'RE', '2097.92', 'A'),
(256, 173, 270, 2019, '2019-04-29', 'ENTRETIEN', 'FT1904005', 0, 'Delta Minimum forfaitaire', 1788, '2019-05-29', '', 'RE', '1788', 'A'),
(257, 121, 271, 2019, '2019-04-29', 'ENTRETIEN', 'FT1904006', 28, '', 505.8, '2019-05-29', '', 'RE', '505.8', 'A'),
(258, 38, 272, 2019, '2019-04-29', 'LOCATION-ENTRETIEN', 'FT1904007', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.78, '2019-05-29', '', 'AR', '', 'A'),
(259, 192, 273, 2019, '2019-04-29', 'LOCATION-ENTRETIEN', 'FT1904008', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-05-29', '', 'RE', '4807.41', 'A'),
(260, 72, 274, 2019, '2019-04-29', 'LOCATION-ENTRETIEN', 'FT1904009', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-05-29', '', 'RE', '', 'A'),
(261, 104, 275, 2019, '2019-04-30', 'LOCATION-ENTRETIEN', 'FT1904010', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-05-30', '', 'ENCE', '6641.09', 'A'),
(262, 35, 276, 2019, '2019-04-30', 'ENTRETIEN', 'FT1904011', 0, '', 1069.08, '2019-05-30', '', 'AR', '', 'A'),
(263, 43, 277, 2019, '2019-04-30', 'ENTRETIEN', 'FT1904012', 0, '', 1212, '2019-05-30', '', 'RE', '1212', 'A'),
(264, 4, 278, 2019, '2019-05-02', 'ENTRETIEN', 'FT1905001', 0, '', 30213.92, '2019-06-01', '', 'RE', '30213.92', 'A'),
(265, 185, 279, 2019, '2019-05-06', 'ENTRETIEN', 'FT1905002', 0, 'Drap de bain 100x150', 7727.7, '2019-06-05', '', 'RE', '7727.7', 'A'),
(266, 185, 280, 2019, '2019-05-20', 'ENTRETIEN', 'FT1905003', 0, 'Drap de bain 100x150', 6576.72, '2019-06-19', '', 'RE', '6576.72', 'A'),
(267, 4, 281, 2019, '2019-05-30', 'ENTRETIEN', 'FT1905004', 0, 'Blouse BEN (col chemisier)', 33764.62, '2019-06-29', '', 'RE', '33764.62', 'A'),
(268, 173, 282, 2019, '2019-05-30', 'ENTRETIEN', 'FT1905005', 0, 'Pantalon LENA ', 1788, '2019-06-29', '', 'AR', '', 'A'),
(269, 38, 283, 2019, '2019-05-31', 'LOCATION-ENTRETIEN', 'FT1905006', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-06-30', '', 'RE', '15686.73', 'A'),
(270, 153, 284, 2019, '2019-05-31', 'LOCATION-ENTRETIEN', 'FT1905007', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-06-30', '', 'RE', '2097.92', 'A'),
(271, 72, 285, 2019, '2019-05-31', 'LOCATION-ENTRETIEN', 'FT1905008', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-06-30', '', 'RE', '4522.61', 'A'),
(272, 192, 286, 2019, '2019-05-31', 'LOCATION-ENTRETIEN', 'FT1905009', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-06-30', '', 'RE', '4807.41', 'A'),
(273, 35, 287, 2019, '2019-05-31', 'ENTRETIEN', 'FT1905010', 0, 'Blouse MAEL', 1054.92, '2019-06-30', '', 'AR', '', 'A'),
(274, 43, 288, 2019, '2019-05-31', 'ENTRETIEN', 'FT1905011', 0, 'Blouse blanche SOFADEX', 1333.68, '2019-06-30', '', 'RE', '1333.68', 'A'),
(275, 121, 290, 2019, '2019-05-31', 'ENTRETIEN', 'FT1905012', 28, 'Combinaison NGA', 436.8, '2019-06-30', '', 'RE', '436.8', 'A'),
(276, 185, 289, 2019, '2019-06-05', 'ENTRETIEN', 'FT1906001', 0, 'Drap de bain 100x150', 8100.84, '2019-07-05', '', 'RE', '8100.84', 'A'),
(277, 211, 291, 2019, '2019-06-18', 'AUTRE', 'FT1906002', 0, 'Dépôt de garantie Prestation Location-Entretien', 8539.7, '2019-07-18', '', 'RE', '8539.7', 'A'),
(278, 38, 292, 2019, '2019-06-18', 'AUTRE', 'FT1906003', 0, 'Dépôt de garantie Prestation Location-Entretien', 9573.3, '2019-07-18', '', 'AR', '', 'A'),
(279, 185, 293, 2019, '2019-06-20', 'ENTRETIEN', 'FT1906004', 0, 'Drap de bain 100x150', 7005.9, '2019-07-20', '', 'RE', '7005.9', 'A'),
(280, 72, 295, 2019, '2019-06-24', 'LOCATION-ENTRETIEN', 'FT1906006', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-07-24', '', 'RE', '4522.61', 'A'),
(281, 38, 294, 2019, '2019-06-25', 'LOCATION-ENTRETIEN', 'FT1906005', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-07-25', '', 'AR', '', 'A'),
(282, 192, 296, 2019, '2019-06-25', 'LOCATION-ENTRETIEN', 'FT1906007', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-07-25', '', 'NC', '4807.41', 'A'),
(283, 153, 297, 2019, '2019-06-30', 'LOCATION-ENTRETIEN', 'FT1906008', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-07-30', '', 'RE', '2097.92', 'A'),
(284, 104, 298, 2019, '2019-06-30', 'LOCATION-ENTRETIEN', 'FT1906009', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-06-24', '', 'RE', '11068.49', 'A'),
(285, 4, 299, 2019, '2019-06-30', 'ENTRETIEN', 'FT1906010', 0, 'Blouse BEN (col chemisier)', 10171.36, '2019-07-30', '', 'RE', '10171.36', 'A'),
(286, 185, 300, 2019, '2019-07-06', 'ENTRETIEN', 'FT1907001', 0, 'Drap de bain 100x150', 7347.66, '2019-08-05', '', 'RE', '7347.66', 'A'),
(287, 121, 301, 2019, '2019-07-10', 'ENTRETIEN', 'FT1907002', 28, 'Combinaison NGA', 127.2, '2019-08-09', '', 'RE', '127.2', 'A'),
(288, 43, 302, 2019, '2019-07-10', 'ENTRETIEN', 'FT1907003', 0, 'Blouse blanche SOFADEX', 1209, '2019-08-09', '', 'RE', '1209', 'A'),
(289, 35, 303, 2019, '2019-07-10', 'ENTRETIEN', 'FT1907004', 0, 'Blouse MAEL', 771.72, '2019-08-09', '', 'AR', '', 'A'),
(290, 173, 304, 2019, '2019-07-10', 'ENTRETIEN', 'FT1907005', 0, 'Pantalon LENA ', 1788, '2019-08-09', '', 'RE', '1788', 'A'),
(291, 207, 305, 2019, '2019-07-15', 'AUTRE', 'FT1907006', 0, 'Dépôt de garantie Prestation Location-Entretien', 7751.1, '2019-08-14', '', 'RE', '7751.1', 'A'),
(292, 4, 306, 2019, '2019-07-15', 'ENTRETIEN', 'FT1907007', 0, 'Blouse BEN (col chemisier)', 4997.69, '2019-08-14', '', 'RE', '4997.69', 'A'),
(293, 185, 307, 2019, '2019-07-20', 'ENTRETIEN', 'FT1907008', 0, 'Couette', 6443.04, '2019-08-19', '', 'RE', '6443.04', 'A'),
(294, 38, 308, 2019, '2019-07-30', 'LOCATION-ENTRETIEN', 'FT1907009', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-08-29', '', 'RE', '15686.73', 'A'),
(295, 72, 309, 2019, '2019-07-30', 'LOCATION-ENTRETIEN', 'FT1907010', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-08-29', '', 'RE', '4522.61', 'A'),
(296, 192, 310, 2019, '2019-07-30', 'LOCATION-ENTRETIEN', 'FT1907011', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-08-29', '', 'RE', '4807.41', 'A'),
(297, 153, 311, 2019, '2019-07-30', 'LOCATION-ENTRETIEN', 'FT1907012', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-08-29', '', 'RE', '2097.92', 'A'),
(298, 104, 312, 2019, '2019-07-30', 'LOCATION-ENTRETIEN', 'FT1907013', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-08-29', '', 'RE', '11068.49', 'A'),
(299, 121, 314, 2019, '2019-07-30', 'ENTRETIEN', 'FT1907015', 28, 'Combinaison NGA', 349.8, '2019-08-29', '', 'RE', '349.8', 'A'),
(300, 35, 313, 2019, '2019-07-31', 'ENTRETIEN', 'FT1907014', 0, 'Blouse MAEL', 1231.92, '2019-08-30', '', 'AR', '', 'A'),
(301, 173, 315, 2019, '2019-07-31', 'ENTRETIEN', 'FT1907016', 0, 'Pantalon LENA ', 1788, '2019-08-30', '', 'RE', '1788', 'A'),
(302, 43, 316, 2019, '2019-07-31', 'ENTRETIEN', 'FT1907017', 0, 'Blouse blanche SOFADEX', 1569.36, '2019-08-30', '', 'RE', '1569.36', 'A'),
(303, 185, 317, 2019, '2019-08-05', 'ENTRETIEN', 'FT1908001', 0, 'Drap de bain 100x150', 6288.12, '2019-09-04', '', 'RE', '6288.12', 'A'),
(304, 185, 318, 2019, '2019-08-21', 'ENTRETIEN', 'FT1908002', 0, 'Drap de bain 100x150', 2440.68, '2019-09-20', '', 'RE', '2440.68', 'A'),
(305, 38, 319, 2019, '2019-08-27', 'LOCATION-ENTRETIEN', 'FT1908003', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-09-26', '', 'AR', '', 'A'),
(306, 72, 320, 2019, '2019-08-27', 'LOCATION-ENTRETIEN', 'FT1908004', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-09-26', '', 'RE', '4522.61', 'A'),
(307, 192, 321, 2019, '2019-08-28', 'LOCATION-ENTRETIEN', 'FT1908005', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-09-27', '', 'RE', '4807.41', 'A'),
(308, 104, 322, 2019, '2019-08-31', 'LOCATION-ENTRETIEN', 'FT1908006', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-09-30', '', 'NC', '2544.48', 'A'),
(309, 153, 323, 2019, '2019-08-31', 'LOCATION-ENTRETIEN', 'FT1908007', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-09-30', '', 'RE', '2097.92', 'A'),
(310, 173, 324, 2019, '2019-08-31', 'ENTRETIEN', 'FT1908008', 0, 'Pantalon LENA ', 1788, '2019-09-30', '', 'RE', '1788', 'A'),
(311, 35, 325, 2019, '2019-08-31', 'ENTRETIEN', 'FT1908009', 0, 'Blouse MAEL', 623.04, '2019-09-30', '', 'AR', '', 'A'),
(312, 43, 326, 2019, '2019-08-31', 'ENTRETIEN', 'FT1908010', 0, 'Blouse blanche SOFADEX', 709.68, '2019-09-30', '', 'RE', '709.68', 'A'),
(313, 121, 327, 2019, '2019-08-31', 'ENTRETIEN', 'FT1908011', 28, 'Combinaison NGA', 127.2, '2019-09-30', '', 'RE', '127.2', 'A'),
(314, 213, 328, 2019, '2019-09-02', 'ENTRETIEN', 'FT1909001', 0, 'Forfait de prestation ENTRETIEN', 960, '2019-10-02', '', 'RE', '960', 'A'),
(315, 185, 329, 2019, '2019-09-05', 'ENTRETIEN', 'FT1909002', 0, 'Drap de bain 100x150', 4706.7, '2019-10-05', '', 'RE', '4706.7', 'A'),
(316, 192, 330, 2019, '2019-09-18', 'AUTRE', 'FT1909003', 0, '', 238.8, '2019-10-18', '', 'RE', '238.8', 'A'),
(317, 185, 331, 2019, '2019-09-20', 'ENTRETIEN', 'FT1909004', 0, 'Drap de bain 100x150', 5949, '2019-10-20', '', 'RE', '5949', 'A'),
(318, 213, 332, 2019, '2019-09-30', 'ENTRETIEN', 'FT1909005', 0, 'FORFAIT DECATISSAGE LINGE DE TABLE', 3180, '2019-10-30', '', 'RE', '3180', 'A'),
(319, 38, 333, 2019, '2019-09-30', 'LOCATION-ENTRETIEN', 'FT1909006', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-10-30', '', 'RE', '15686.73', 'A'),
(320, 72, 334, 2019, '2019-09-30', 'LOCATION-ENTRETIEN', 'FT1909007', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-10-30', '', 'RE', '4522.61', 'A'),
(321, 192, 335, 2019, '2019-09-30', 'LOCATION-ENTRETIEN', 'FT1909008', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-10-30', '', 'RE', '4807.41', 'A'),
(322, 213, 336, 2019, '2019-09-30', 'ENTRETIEN', 'FT1909009', 0, 'FORFAIT ENTRETIEN linge de table', 9000, '2019-10-30', '', 'RE', '9000', 'A'),
(323, 153, 337, 2019, '2019-09-30', 'LOCATION-ENTRETIEN', 'FT1909010', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-10-30', '', 'RE', '2097.92', 'A'),
(324, 121, 338, 2019, '2019-09-30', 'ENTRETIEN', 'FT1909011', 28, ' Période Du 01/09/2019 Au 30/09/2019', 3000, '2019-10-30', '', 'RE', '3000', 'A'),
(325, 104, 339, 2019, '2019-09-30', 'LOCATION-ENTRETIEN', 'FT1909012', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-10-30', '', 'RE', '11068.49', 'A'),
(326, 173, 340, 2019, '2019-10-01', 'ENTRETIEN', 'FT1910001', 0, ' Période Du 01/09/2019 Au 30/09/2019', 1788, '2019-10-31', '', 'RE', '1788', 'A'),
(327, 35, 341, 2019, '2019-10-01', 'ENTRETIEN', 'FT1910002', 0, ' Période Du 01/09/2019 Au 30/09/2019', 849.6, '2019-10-31', '', 'AR', '', 'A'),
(328, 43, 343, 2019, '2019-10-01', 'ENTRETIEN', 'FT1910004', 0, ' Période du 01/09/2019 au 30/09/2019', 1340.16, '2019-10-31', '', 'RE', '1340.16', 'A'),
(329, 185, 344, 2019, '2019-10-06', 'ENTRETIEN', 'FT1910005', 0, ' Période du 21/09/2019 au 05/10/2019', 7294.32, '2019-11-05', '', 'RE', '7294.32', 'A'),
(330, 43, 345, 2019, '2019-10-09', 'CONFECTION', 'FT1910006', 0, '', 79382.4, '2019-11-08', '', 'RE', '39674.4', 'A'),
(331, 185, 346, 2019, '2019-10-20', 'ENTRETIEN', 'FT1910007', 0, ' Période du 06/10/2019 au 20/10/2019', 8179.14, '2019-11-19', '', 'RE', '8179.14', 'A'),
(332, 121, 347, 2019, '2019-10-27', 'CONFECTION', 'FT1910008', 0, '', 101865.6, '2019-11-04', '', 'RE', '6460.8', 'A'),
(333, 38, 348, 2019, '2019-10-28', 'LOCATION-ENTRETIEN', 'FT1910009', 0, 'Prestation Location-Entretien Vêtements professionnels', 15686.72, '2019-11-27', '', 'RE', '15686.73', 'A'),
(334, 72, 349, 2019, '2019-10-28', 'LOCATION-ENTRETIEN', 'FT1910010', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-11-27', '', 'RE', '4522.61', 'A'),
(335, 121, 342, 2019, '2019-10-31', 'ENTRETIEN', 'FT1910003', 28, ' Période Du 01/09/2019 Au 01/10/2019', 3000, '2019-11-30', '', 'AR', '', 'A'),
(336, 213, 350, 2019, '2019-10-31', 'ENTRETIEN', 'FT1910011', 0, 'FORFAIT ENTRETIEN linge de table', 9000, '2019-11-29', '', 'RE', '9000', 'A'),
(337, 207, 351, 2019, '2019-10-31', 'LOCATION-ENTRETIEN', 'FT1910012', 0, '', 3100.68, '2019-11-30', '', 'RE', '3100.68', 'A'),
(338, 153, 352, 2019, '2019-10-31', 'LOCATION-ENTRETIEN', 'FT1910013', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-11-30', '', 'RE', '2097.92', 'A'),
(339, 192, 353, 2019, '2019-10-31', 'LOCATION-ENTRETIEN', 'FT1910014', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-11-30', '', 'RE', '4807.41', 'A'),
(340, 104, 354, 2019, '2019-10-31', 'LOCATION-ENTRETIEN', 'FT1910015', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-11-30', '', 'RE', '11068.49', 'A'),
(341, 173, 355, 2019, '2019-10-31', 'ENTRETIEN', 'FT1910016', 0, ' Période du 01/10/2019 au 31/10/2019', 1788, '2019-11-30', '', 'RE', '1788', 'A'),
(342, 43, 356, 2019, '2019-10-31', 'ENTRETIEN', 'FT1910017', 0, ' Période du 01/10/2019 au 31/10/2019', 342.96, '2019-11-30', '', 'AR', '', 'A'),
(343, 35, 357, 2019, '2019-10-31', 'ENTRETIEN', 'FT1910018', 0, ' Période du 01/10/2019 au 31/10/2019', 899.16, '2019-11-30', '', 'AR', '', 'A'),
(344, 185, 358, 2019, '2019-11-05', 'ENTRETIEN', 'FT1911001', 0, ' Période du 21/10/2019 au 05/11/2019', 8261.1, '2019-12-05', '', 'RE', '8261.1', 'A'),
(345, 185, 359, 2019, '2019-11-20', 'ENTRETIEN', 'FT1911002', 0, ' Période du 06/11/2019 au 20/11/2019', 6575.16, '2019-12-20', '', 'RE', '6575.16', 'A'),
(346, 207, 360, 2019, '2019-11-26', 'LOCATION-ENTRETIEN', 'FT1911003', 0, '', 3100.68, '2019-12-26', '', 'RE', '3100.68', 'A'),
(347, 35, 365, 2019, '2019-11-29', 'ENTRETIEN', 'FT1911008', 0, ' Période du 01/11/2019 au 30/11/2019', 920.4, '2019-12-29', '', 'AR', '', 'A'),
(348, 121, 370, 2019, '2019-11-29', 'ENTRETIEN', 'FT1911013', 28, ' Période du 01/11/2019 au 30/11/2019', 3000, '2019-12-29', '', 'RE', '3000', 'A'),
(349, 38, 362, 2019, '2019-11-30', 'LOCATION-ENTRETIEN', 'FT1911005', 0, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2019-12-30', '', 'RE', '18877.87', 'A'),
(350, 72, 363, 2019, '2019-11-30', 'LOCATION-ENTRETIEN', 'FT1911006', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2019-12-30', '', 'RE', '4522.61', 'A'),
(351, 192, 364, 2019, '2019-11-30', 'LOCATION-ENTRETIEN', 'FT1911007', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2019-12-30', '', 'RE', '4807.41', 'A'),
(352, 43, 366, 2019, '2019-11-30', 'ENTRETIEN', 'FT1911009', 0, ' Période du 01/11/2019 au 30/11/2019', 462.6, '2019-12-30', '', 'AR', '', 'A'),
(353, 104, 367, 2019, '2019-11-30', 'LOCATION-ENTRETIEN', 'FT1911010', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2019-12-30', '', 'RE', '11068.49', 'A'),
(354, 153, 368, 2019, '2019-11-30', 'LOCATION-ENTRETIEN', 'FT1911011', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2019-12-30', '', 'RE', '2097.92', 'A'),
(355, 173, 369, 2019, '2019-11-30', 'ENTRETIEN', 'FT1911012', 0, ' Période du 01/11/2019 au 30/11/2019', 1788, '2019-12-30', '', 'AR', '', 'A'),
(356, 213, 371, 2019, '2019-11-30', 'ENTRETIEN', 'FT1911014', 0, 'FORFAIT ENTRETIEN linge de table', 9000, '2019-12-30', '', 'AR', '', 'A'),
(357, 207, 372, 2019, '2019-12-04', 'AUTRE', 'FT1912001', 0, 'Dépôt de garantie Prestation Location-Entretien contrat n°19000016', 2854.05, '2020-01-03', '', 'RE', '2854.05', 'A');
INSERT INTO `web_facturation` (`ref_wfact`, `refacteur_wfact`, `reffact_wfact`, `annee_wfact`, `date_wfact`, `typefact_wfact`, `code_wfact`, `refcontrat_wfact`, `ligneun_wfact`, `ttc_wfact`, `decheance_wfact`, `listebl_wfact`, `etat_wfact`, `detailencaisse_wfact`, `flag_wfact`) VALUES
(358, 185, 373, 2019, '2019-12-05', 'ENTRETIEN', 'FT1912002', 0, ' Période du 21/11/2019 au 05/12/2019', 6845.4, '2020-01-04', '', 'RE', '6845.4', 'A'),
(359, 185, 380, 2019, '2019-12-20', 'ENTRETIEN', 'FT1912009', 0, ' Période du 06/12/2019 au 20/12/2019', 6386.4, '2020-01-19', '', 'RE', '6386.4', 'A'),
(360, 207, 361, 2019, '2019-12-25', 'ENTRETIEN', 'FT1911004', 0, ' Période du 01/11/2019 au 26/12/2019', 2498.16, '2019-12-30', '', 'RE', '2498.16', 'A'),
(361, 173, 381, 2019, '2019-12-30', 'ENTRETIEN', 'FT1912010', 0, ' Période du 01/12/2019 au 31/12/2019', 1788, '2020-01-29', '', 'RE', '1788', 'A'),
(362, 121, 382, 2019, '2019-12-30', 'ENTRETIEN', 'FT1912011', 28, ' Période du 01/12/2019 au 31/12/2019', 3000, '2020-01-29', '', 'AR', '', 'A'),
(363, 35, 383, 2019, '2019-12-30', 'ENTRETIEN', 'FT1912012', 0, ' Période du 01/12/2019 au 31/12/2019', 955.8, '2020-01-29', '', 'AR', '', 'A'),
(364, 38, 374, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912003', 0, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-01-30', '', 'RE', '18877.87', 'A'),
(365, 153, 375, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912004', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.91, '2020-01-30', '', 'RE', '2097.92', 'A'),
(366, 207, 376, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912005', 0, '', 3100.68, '2020-01-30', '', 'RE', '3100.68', 'A'),
(367, 72, 377, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912006', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-01-30', '', 'RE', '4522.61', 'A'),
(368, 192, 378, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912007', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-01-30', '', 'RE', '4807.41', 'A'),
(369, 104, 379, 2019, '2019-12-31', 'LOCATION-ENTRETIEN', 'FT1912008', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2020-01-30', '', 'RE', '11068.49', 'A'),
(370, 213, 386, 2019, '2019-12-31', 'ENTRETIEN', 'FT1912013', 0, 'FORFAIT ENTRETIEN linge de table', 9000, '2020-01-30', '', 'RE', '9000', 'A'),
(371, 185, 385, 2020, '2020-01-05', 'ENTRETIEN', 'FT200001', 0, ' Période du 21/12/2019 au 05/01/2020', 10548.24, '2020-02-04', '', 'RE', '10548.24', 'A'),
(372, 4, 387, 2020, '2020-01-14', 'CONFECTION', 'FT200002', 2, 'Chaussure de sécurité modèle ALPHA S3 SRC   ', 39390, '2020-02-13', '', 'RE', '39390', 'A'),
(373, 154, 388, 2020, '2020-01-16', 'CONFECTION', 'FT200003', 0, '', 2580, '2020-02-15', '', 'RE', '2580', 'A'),
(374, 207, 389, 2020, '2020-01-24', 'LOCATION-ENTRETIEN', 'FT200004', 0, 'PERIODE: JANVIER 2020', 3100.68, '2020-02-23', '', 'RE', '3100.68', 'A'),
(375, 207, 390, 2020, '2020-01-24', 'ENTRETIEN', 'FT200005', 0, ' Période du 01/01/2020 au 24/01/2020', 826.08, '2020-02-23', '', 'RE', '826.08', 'A'),
(376, 38, 391, 2020, '2020-01-27', 'LOCATION-ENTRETIEN', 'FT200006', 0, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-02-26', '', 'RE', '18877.87', 'A'),
(377, 72, 392, 2020, '2020-01-27', 'LOCATION-ENTRETIEN', 'FT200007', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-02-26', '', 'RE', '4522.61', 'A'),
(378, 192, 393, 2020, '2020-01-27', 'LOCATION-ENTRETIEN', 'FT200008', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-02-26', '', 'RE', '4807.41', 'A'),
(379, 104, 394, 2020, '2020-01-27', 'LOCATION-ENTRETIEN', 'FT200009', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2020-02-26', '', 'RE', '11068.49', 'A'),
(380, 153, 396, 2020, '2020-01-27', 'LOCATION-ENTRETIEN', 'FT200011', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.92, '2020-02-26', '', 'RE', '2097.92', 'A'),
(381, 213, 395, 2020, '2020-01-28', 'ENTRETIEN', 'FT200010', 0, 'FORFAIT ENTRETIEN linge de table', 11988, '2020-02-27', '', 'RE', '11988', 'A'),
(382, 121, 399, 2020, '2020-01-30', 'ENTRETIEN', 'FT200014', 28, ' Période du 01/01/2020 au 31/01/2020', 3000, '2020-02-29', '', 'RE', '3000', 'A'),
(383, 4, 401, 2020, '2020-01-30', 'ENTRETIEN', 'FT200016', 0, ' Période du 01/01/2020 au 31/01/2020', 6323.57, '2020-02-29', '', 'RE', '6323.57', 'A'),
(384, 35, 397, 2020, '2020-01-31', 'ENTRETIEN', 'FT200012', 0, ' Période du 01/01/2020 au 31/01/2020', 899.16, '2020-02-29', '', 'AR', '', 'A'),
(385, 173, 398, 2020, '2020-01-31', 'ENTRETIEN', 'FT200013', 0, ' Période du 01/01/2020 au 31/01/2020', 1788, '2020-03-01', '', 'RE', '1788', 'A'),
(386, 185, 400, 2020, '2020-01-31', 'ENTRETIEN', 'FT200015', 0, ' Période du 06/01/2020 au 31/01/2020', 11407.14, '2020-03-01', '', 'RE', '11407.14', 'A'),
(387, 62, 402, 2020, '2020-02-14', 'CONFECTION', 'FT200017', 0, 'Chemise manches longues blanche HOMME - modèle JOA', 5976, '2020-02-19', '', 'RE', '5976', 'A'),
(388, 4, 403, 2020, '2020-02-19', 'AUTRE', 'FT200018', 0, 'Dépôt de garantie ', 107989.75, '2020-02-20', '', 'RE', '107989.75', 'A'),
(389, 156, 404, 2020, '2020-02-19', 'AUTRE', 'FT200019', 0, 'Dépôt de garantie ', 7208.31, '2020-02-20', '', 'RE', '7208.31', 'A'),
(390, 38, 405, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200020', 0, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-03-26', '', 'RE', '18877.87', 'A'),
(391, 207, 406, 2020, '2020-02-25', 'ENTRETIEN', 'FT200021', 0, ' Période du 25/01/2020 au 25/02/2020', 1485.24, '2020-03-26', '', 'RE', '1485.24', 'A'),
(392, 207, 407, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200022', 0, 'FEVRIER 2020', 3100.68, '2020-03-26', '', 'RE', '3100.68', 'A'),
(393, 192, 408, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200023', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-03-26', '', 'RE', '4807.41', 'A'),
(394, 72, 409, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200024', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-03-26', '', 'ENCE', '', 'A'),
(395, 153, 410, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200025', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.92, '2020-03-26', '', 'RE', '2097.92', 'A'),
(396, 104, 411, 2020, '2020-02-25', 'LOCATION-ENTRETIEN', 'FT200026', 0, 'Prestation Location-Entretien Vêtements professionnels', 11068.49, '2020-03-26', '', 'RE', '11068.49', 'A'),
(397, 213, 412, 2020, '2020-02-25', 'ENTRETIEN', 'FT200027', 0, 'FORFAIT ENTRETIEN linge de table', 11988, '2020-03-26', '', 'RE', '11988', 'A'),
(398, 35, 413, 2020, '2020-02-27', 'ENTRETIEN', 'FT200028', 0, ' Période du 01/02/2020 au 29/02/2020', 920.4, '2020-03-28', '', 'AR', '', 'A'),
(399, 4, 414, 2020, '2020-02-28', 'ENTRETIEN', 'FT200029', 0, ' Période du 01/02/2020 au 29/02/2020', 15298.61, '2020-03-29', '', 'RE', '15298.61', 'A'),
(400, 173, 415, 2020, '2020-02-28', 'ENTRETIEN', 'FT200030', 0, ' Période du 01/02/2020 au 29/02/2020', 1243.62, '2020-03-29', '', 'NC', '3576', 'A'),
(401, 72, 418, 2020, '2020-02-28', 'CONFECTION', 'FT200033', 0, 'Facturation après inventaire du 10.02.2020', 8817.6, '2020-03-29', '', 'AR', '', 'A'),
(402, 121, 416, 2020, '2020-02-29', 'ENTRETIEN', 'FT200031', 28, ' Période du 01/02/2020 au 29/02/2020', 3000, '2020-03-30', '', 'RE', '3000', 'A'),
(403, 185, 417, 2020, '2020-02-29', 'ENTRETIEN', 'FT200032', 0, ' Période du 01/02/2020 au 29/02/2020', 12377.64, '2020-03-30', '', 'RE', '12377.64', 'A'),
(404, 4, 431, 2020, '2020-03-26', 'CONFECTION', 'FT200046', 0, 'Demi-masque de protection lavable   ', 54000, '2020-04-25', '', 'RE', '54000', 'A'),
(405, 38, 420, 2020, '2020-03-27', 'LOCATION-ENTRETIEN', 'FT200035', 0, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-04-26', '', 'RE', '18877.87', 'A'),
(406, 192, 421, 2020, '2020-03-27', 'LOCATION-ENTRETIEN', 'FT200036', 0, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-04-26', '', 'RE', '4807.42', 'A'),
(407, 153, 423, 2020, '2020-03-27', 'LOCATION-ENTRETIEN', 'FT200038', 0, 'Prestation Location-Entretien Vêtements professionnels', 2097.92, '2020-04-26', '', 'AR', '', 'A'),
(408, 104, 424, 2020, '2020-03-27', 'LOCATION-ENTRETIEN', 'FT200039', 29, 'Prestation Location-Entretien Vêtements professionnels', 7471.22, '2020-04-26', '', 'RE', '7471.22', 'A'),
(409, 207, 425, 2020, '2020-03-27', 'LOCATION-ENTRETIEN', 'FT200040', 0, 'MARS 2020', 3100.68, '2020-04-26', '', 'RE', '3100.68', 'A'),
(410, 4, 432, 2020, '2020-03-27', 'AUTRE', 'FT200047', 0, 'Chaussure de sécurité modèle ALPHA S3 SRC   ', 36360, '2020-03-30', '', 'RE', '36360', 'A'),
(411, 4, 419, 2020, '2020-03-30', 'AUTRE', 'FT200034', 0, 'Gel hydroalcoolique 1 litre', 4320, '2020-04-01', '', 'RE', '4320', 'A'),
(412, 173, 426, 2020, '2020-03-30', 'ENTRETIEN', 'FT200041', 0, ' Période du 01/03/2020 au 30/03/2020', 1788, '2020-04-29', '', 'RE', '1788', 'A'),
(413, 185, 427, 2020, '2020-03-30', 'ENTRETIEN', 'FT200042', 0, ' Période du 01/03/2020 au 30/03/2020', 8152.86, '2020-04-29', '', 'RE', '8152.86', 'A'),
(414, 35, 428, 2020, '2020-03-30', 'ENTRETIEN', 'FT200043', 0, ' Période du 01/03/2020 au 30/03/2020', 686.76, '2020-04-29', '', 'AR', '', 'A'),
(415, 207, 429, 2020, '2020-03-30', 'ENTRETIEN', 'FT200044', 0, ' Période du 26/02/2020 au 30/03/2020', 1214.28, '2020-04-24', '', 'RE', '1214.28', 'A'),
(416, 121, 430, 2020, '2020-03-30', 'ENTRETIEN', 'FT200045', 28, ' Période du 01/03/2020 au 30/03/2020', 3000, '2020-04-29', '', 'RE', '3000', 'A'),
(417, 213, 433, 2020, '2020-03-30', 'ENTRETIEN', 'FT200048', 47, 'FORFAIT ENTRETIEN linge de table', 5994, '2020-04-29', '', 'RE', '5994', 'A'),
(418, 72, 422, 2020, '2020-03-31', 'LOCATION-ENTRETIEN', 'FT200037', 0, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-04-26', '', 'RE', '4522.61', 'A'),
(419, 4, 434, 2020, '2020-03-31', 'ENTRETIEN', 'FT200049', 2, ' Période du 01/03/2020 au 31/03/2020', 31167.89, '2020-04-30', '', 'RE', '31167.89', 'A'),
(420, 554, 435, 2020, '2020-03-31', 'AUTRE', 'FT200050', 0, 'Demi-masque de protection lavable', 9750, '2020-04-30', '', 'RE', '9750', 'A'),
(421, 211, 436, 2020, '2020-03-31', 'LOCATION-ENTRETIEN', 'FT200051', 50, 'Prestation Location-Entretien Vêtements professionnels', 2846.57, '2020-04-30', '', 'AR', '', 'A'),
(422, 555, 437, 2020, '2020-04-06', 'CONFECTION', 'FT200052', 0, 'Demi-masque de protection lavable   ', 66000, '2020-05-06', '', 'RE', '66000', 'A'),
(423, 557, 438, 2020, '2020-04-13', 'CONFECTION', 'FT200053', 0, 'Demi-masque de protection lavable   ', 975, '2020-04-13', '', 'RE', '975', 'A'),
(424, 559, 439, 2020, '2020-04-17', 'CONFECTION', 'FT200054', 58, 'Demi-masque de protection lavable', 1560, '2020-04-17', 'BL200280 (17/04/2020)', 'RE', '1560', 'A'),
(425, 226, 440, 2020, '2020-04-20', 'AUTRE', 'FT200055', 59, 'Demi-masque de protection lavable  - Norme NM/ST21.5.201-2020', 27588, '2020-04-20', '', 'RE', '27588', 'A'),
(426, 156, 441, 2020, '2020-04-22', 'AUTRE', 'FT200056', 27, 'Acompte commande EPI / Site JORF', 123800, '2020-04-22', '', 'RE', '123800', 'A'),
(427, 207, 442, 2020, '2020-04-23', 'CONFECTION', 'FT200057', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 3000, '2020-04-23', '', 'RE', '3000', 'A'),
(428, 191, 445, 2020, '2020-04-28', 'CONFECTION', 'FT200058', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 40500, '2020-05-28', '', 'RE', '40500', 'A'),
(429, 567, 446, 2020, '2020-04-28', 'CONFECTION', 'FT200059', 61, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 5040, '2020-04-28', '', 'RE', '5040', 'A'),
(430, 191, 449, 2020, '2020-04-30', 'CONFECTION', 'FP200001', 60, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 10800, '2020-04-30', '', 'RE', '10800', 'A'),
(431, 191, 447, 2020, '2020-05-01', 'CONFECTION', 'FT200060', 60, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 10800, '2020-05-01', '', 'RE', '10800', 'A'),
(432, 191, 448, 2020, '2020-05-01', 'CONFECTION', 'FT200061', 60, '', 0, '2020-05-31', '', 'SUP', '', 'A'),
(433, 38, 450, 2020, '2020-05-02', 'LOCATION-ENTRETIEN', 'FT200062', 6, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-06-01', '', 'RE', '18877.87', 'A'),
(434, 4, 451, 2020, '2020-05-03', 'ENTRETIEN', 'FT200063', 2, ' Période du 31/03/2020 au 30/04/2020', 57217.58, '2020-05-03', 'BL200261 (01/04/2020)@BL200266 (04/04/2020)@BL200269 (08/04/2020)@BL200273 (12/04/2020)@BL200274 (15/04/2020)@BL200279 (18/04/2020)@BL200282 (22/04/2020)@BL200291 (25/04/2020)@BL200295 (29/04/2020)@BL200321 (29/04/2020)', 'RE', '', 'A'),
(435, 192, 452, 2020, '2020-05-03', 'LOCATION-ENTRETIEN', 'FT200064', 38, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-05-03', '', 'RE', '', 'A'),
(436, 72, 453, 2020, '2020-05-03', 'LOCATION-ENTRETIEN', 'FT200065', 14, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-05-03', '', 'RE', '4522.61', 'A'),
(437, 211, 454, 2020, '2020-05-03', 'LOCATION-ENTRETIEN', 'FT200066', 50, 'Prestation Location-Entretien Vêtements professionnels', 2846.57, '2020-05-02', '', 'AR', '', 'A'),
(438, 121, 455, 2020, '2020-05-03', 'ENTRETIEN', 'FT200067', 0, ' Période du 01/04/2020 au 30/04/2020', 1212.6, '2020-05-03', '', 'NC', '1212.6', 'A'),
(439, 228, 456, 2020, '2020-05-03', 'ENTRETIEN', 'FT200068', 55, ' Période du 03/05/2020', 2448, '2020-05-03', 'BL200292 (28/04/2020)', 'AR', '', 'A'),
(440, 173, 457, 2020, '2020-05-04', 'ENTRETIEN', 'FT200069', 37, ' Période du 01/04/2020 au 30/04/2020', 1788, '2020-05-04', '', 'AR', '', 'A'),
(441, 572, 458, 2020, '2020-05-07', 'CONFECTION', 'FT200070', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 3360, '2020-06-06', '', 'RE', '3360', 'A'),
(442, 572, 459, 2020, '2020-05-08', 'CONFECTION', 'FT200071', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 3360, '2020-05-08', '', 'RE', '3360', 'A'),
(443, 576, 460, 2020, '2020-05-09', 'CONFECTION', 'FT200072', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 2688, '2020-05-09', '', 'RE', '2688', 'A'),
(444, 577, 462, 2020, '2020-05-10', 'CONFECTION', 'FT200074', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 1680, '2020-05-10', '', 'RE', '1680', 'A'),
(445, 66, 461, 2020, '2020-05-11', 'CONFECTION', 'FT200073', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 2688, '2020-05-11', '', 'RE', '2688', 'A'),
(446, 575, 463, 2020, '2020-05-11', 'CONFECTION', 'FT200075', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 1680, '2020-05-10', '', 'AN', '', 'A'),
(447, 578, 464, 2020, '2020-05-11', 'CONFECTION', 'FT200076', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 336, '2020-05-10', '', 'RE', '336', 'A'),
(448, 579, 465, 2020, '2020-05-11', 'CONFECTION', 'FT200077', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 336, '2020-05-10', '', 'RE', '336', 'A'),
(449, 580, 466, 2020, '2020-05-11', 'CONFECTION', 'FT200078', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 336, '2020-05-10', '', 'RE', '336', 'A'),
(450, 581, 467, 2020, '2020-05-11', 'CONFECTION', 'FT200079', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 336, '2020-05-10', '', 'RE', '336', 'A'),
(451, 582, 469, 2020, '2020-05-15', 'CONFECTION', 'FT200081', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 80548.56, '2020-06-14', '', 'AR', '', 'A'),
(452, 236, 468, 2020, '2020-05-18', 'CONFECTION', 'FT200080', 0, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 7800, '2020-05-18', '', 'RE', '7800', 'A'),
(453, 156, 470, 2020, '2020-05-21', 'CONFECTION', 'FT200082', 27, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 8400, '2020-05-21', '', 'RE', '8400', 'A'),
(454, 38, 471, 2020, '2020-05-30', 'LOCATION-ENTRETIEN', 'FT200083', 6, 'Prestation Location-Entretien Vêtements professionnels', 18877.87, '2020-05-30', '', 'AR', '', 'A'),
(455, 72, 472, 2020, '2020-05-30', 'LOCATION-ENTRETIEN', 'FT200084', 14, 'Prestation Location-Entretien Vêtements professionnels', 4522.61, '2020-05-30', '', 'RE', '', 'A'),
(456, 192, 473, 2020, '2020-05-30', 'LOCATION-ENTRETIEN', 'FT200085', 38, 'Prestation Location-Entretien Vêtements professionnels', 4807.42, '2020-05-30', '', 'RE', '', 'A'),
(457, 211, 474, 2020, '2020-05-30', 'LOCATION-ENTRETIEN', 'FT200086', 50, 'Prestation Location-Entretien Vêtements professionnels', 2846.57, '2020-05-30', '', 'AR', '', 'A'),
(458, 4, 475, 2020, '2020-05-30', 'ENTRETIEN', 'FT200087', 2, ' Période du 01/05/2020 au 31/05/2020', 14128.22, '2020-05-30', 'BL200301 (02/05/2020)@BL200303 (06/05/2020)@BL200308 (09/05/2020)@BL200309 (20/05/2020)', 'AR', '', 'A'),
(459, 121, 476, 2020, '2020-05-30', 'ENTRETIEN', 'FT200088', 28, ' Période du 01/05/2020 au 30/05/2020', 3000, '2020-05-30', '', 'AR', '', 'A'),
(460, 156, 477, 2020, '2020-05-30', 'CONFECTION', 'FT200089', 27, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 8400, '2020-05-30', '', 'ENCE', '', 'A'),
(461, 469, 478, 2020, '2020-06-09', 'CONFECTION', 'FT200090', 0, '', 6000, '2020-07-09', '', 'AR', '', 'A'),
(462, 156, 479, 2020, '2020-06-09', 'CONFECTION', 'FT200091', 27, 'PANTALON + VESTE couleur dominante: GRIS', 123700.01, '2020-06-09', '', 'ENCE', '', 'A'),
(463, 4, 481, 2020, '2020-06-16', 'ENTRETIEN', 'FT200093', 2, ' Période du 01/06/2020 au 16/06/2020', 10820.59, '2020-06-16', '', 'AR', '', 'A'),
(464, 156, 480, 2020, '2020-06-25', 'CONFECTION', 'FT200092', 27, 'Demi-masque de protection blanc lavable Norme NT/ST21.5.201   ', 1680, '2020-06-25', '', 'AR', '', 'A'),
(465, 156, 482, 2020, '2020-06-25', 'CONFECTION', 'FT200094', 0, '', 0, '2020-06-26', '', 'AR', '', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_infostoday`
--

CREATE TABLE `web_infostoday` (
  `ref_wtoday` int(11) NOT NULL,
  `refinfotoday_wtoday` int(11) DEFAULT NULL,
  `ifal_wtoday` varchar(10) DEFAULT NULL,
  `acteurs_wtoday` varchar(500) DEFAULT NULL,
  `profils_wtoday` varchar(100) DEFAULT NULL,
  `ordre_wtoday` int(11) DEFAULT NULL,
  `titre_wtoday` varchar(200) DEFAULT NULL,
  `csstitre_wtoday` varchar(300) DEFAULT NULL,
  `picto_wtoday` varchar(300) DEFAULT NULL,
  `detail_wtoday` varchar(500) DEFAULT NULL,
  `dpublication_wtoday` date DEFAULT NULL,
  `dexpiration_wtoday` date DEFAULT NULL,
  `etat_wtoday` varchar(20) DEFAULT NULL,
  `flag_wtoday` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_infostoday`
--

INSERT INTO `web_infostoday` (`ref_wtoday`, `refinfotoday_wtoday`, `ifal_wtoday`, `acteurs_wtoday`, `profils_wtoday`, `ordre_wtoday`, `titre_wtoday`, `csstitre_wtoday`, `picto_wtoday`, `detail_wtoday`, `dpublication_wtoday`, `dexpiration_wtoday`, `etat_wtoday`, `flag_wtoday`) VALUES
(1, 3, 'AL', '-190-107-57-95-572-', '5-', 1, 'Echéance de votre facture', 'font-size:12px;font-style:bold;color:#f00;', '<i class=\"fa fa-exclamation-triangle\" style=\"font-size:20px;color:RED\"></i>', '', '2020-03-02', '2020-03-25', 'En ligne', 'A'),
(2, 4, 'IF', '-57-', '3-', 1, 'bonne saint valentin ', 'font-size:12px;font-style:normal;color:#000;', '<i class=\"fa fa-exclamation-triangle\" style=\"font-size:20px;color:RED\"></i>', '', '2020-02-12', '2020-02-14', 'En ligne', 'A'),
(3, 1, 'AL', '-57-', '1-3-', 2, 'Alerte 2', 'font-size:12px;font-style:bold;color:#000;', '<i class=\"fa fa-exclamation-triangle\" style=\"font-size:20px;color:RED\"></i>', 'detailllll', '2020-02-11', '2020-02-20', 'En ligne', 'A'),
(4, 2, 'IF', '-57-', '4-', 3, 'News2 nouvel article proposé', 'font-size:12px;font-style:normal;color:#f00;', '<i class=\"fa fa-exclamation-triangle\" style=\"font-size:20px;color:RED\"></i>', 'ddddd', '2020-02-10', '2020-02-25', 'Attente', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_livraisons`
--

CREATE TABLE `web_livraisons` (
  `ref_wlivraison` int(11) NOT NULL,
  `refbl_wlivraison` int(11) DEFAULT NULL,
  `codebl_wlivraison` varchar(20) DEFAULT NULL,
  `notesbl_wlivraison` varchar(500) DEFAULT NULL,
  `datebl_wlivraison` date DEFAULT NULL,
  `totoarticlediff_wlivraison` int(11) DEFAULT NULL,
  `totpieces_wlivraison` int(11) DEFAULT NULL,
  `etatbl_wlivraison` varchar(10) DEFAULT NULL,
  `flag_wlivraison` varchar(5) DEFAULT NULL,
  `refclient_wlivraison` int(11) DEFAULT NULL,
  `site_wlivraison` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_livraisons`
--

INSERT INTO `web_livraisons` (`ref_wlivraison`, `refbl_wlivraison`, `codebl_wlivraison`, `notesbl_wlivraison`, `datebl_wlivraison`, `totoarticlediff_wlivraison`, `totpieces_wlivraison`, `etatbl_wlivraison`, `flag_wlivraison`, `refclient_wlivraison`, `site_wlivraison`) VALUES
(484, 1018, 'BL190426', '', '2020-11-22', 8, 431, 'VAL', 'A', 4, 'GELAS RAIMY'),
(517, 985, 'BL190393', '', '2020-11-21', 9, 184, 'VAL', 'A', 4, 'GELAS RAIMY'),
(556, 944, 'BL190354', '', '2020-11-20', 7, 665, 'VAL', 'A', 4, 'LALLA MIMOUNA'),
(573, 927, 'BL190337', '', '2020-10-18', 8, 523, 'VAL', 'A', 8, 'LALLA MIMOUNA');

-- --------------------------------------------------------

--
-- Structure de la table `web_livraisons_detail`
--

CREATE TABLE `web_livraisons_detail` (
  `ref_wdlivraison` int(11) NOT NULL,
  `refbl_wdlivraison` int(11) DEFAULT NULL,
  `dbl_wdlivraison` date DEFAULT NULL,
  `designationarticle_wdlivraison` varchar(150) DEFAULT NULL,
  `qte_wdlivraison` int(11) DEFAULT NULL,
  `flag_wdlivraison` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_livraisons_detail`
--

INSERT INTO `web_livraisons_detail` (`ref_wdlivraison`, `refbl_wdlivraison`, `dbl_wdlivraison`, `designationarticle_wdlivraison`, `qte_wdlivraison`, `flag_wdlivraison`) VALUES
(618, 927, NULL, 'Blouse col chemisier', 2, ''),
(665, 1018, NULL, 'Blouse col chemisier', 1, ''),
(2206, 944, NULL, 'Blouse kimono', 285, ''),
(2225, 927, NULL, 'Blouse kimono', 143, ''),
(2228, 1018, NULL, 'Blouse kimono', 152, ''),
(2595, 944, NULL, 'Blouse MAEL', 1, ''),
(2758, 927, NULL, 'Blouse SOAN (kimono) couleur', 54, ''),
(2759, 944, NULL, 'Blouse SOAN (kimono) couleur', 36, ''),
(2761, 1018, NULL, 'Blouse SOAN (kimono) couleur', 65, ''),
(2836, 1018, NULL, 'Cagoule passe-montagne', 183, ''),
(2857, 927, NULL, 'Cagoule passe-montagne', 175, ''),
(2858, 944, NULL, 'Cagoule passe-montagne', 278, ''),
(3040, 927, NULL, 'Casquette', 5, ''),
(3041, 1018, NULL, 'Casquette', 2, ''),
(3910, 989, NULL, 'Drap de bain 100x150', 17, ''),
(4344, 989, NULL, 'Drap de lit 300x290', 7, ''),
(5106, 989, NULL, 'Housse de couette 245x265', 6, ''),
(5327, 989, NULL, 'Nappe 150x150', 14, ''),
(5610, 989, NULL, 'Nappe 150x250', 1, ''),
(8189, 927, NULL, 'Pantalon polaire', 43, ''),
(8193, 944, NULL, 'Pantalon polaire', 7, ''),
(8194, 1018, NULL, 'Pantalon polaire', 2, ''),
(8463, 944, NULL, 'Parka imperméable', 11, ''),
(8466, 927, NULL, 'Parka imperméable', 34, ''),
(8468, 1018, NULL, 'Parka imperméable', 5, ''),
(8540, 989, NULL, 'Peignoir', 1, ''),
(9799, 989, NULL, 'Serviette de table blanche', 47, ''),
(10119, 989, NULL, 'Serviette éponge 50x90', 12, ''),
(10398, 989, NULL, 'Taie d\'oreiller 50x70', 10, ''),
(10920, 989, NULL, 'Taie d\'oreiller 60x60', 7, ''),
(11193, 989, NULL, 'Tapis de bain 50x80', 15, ''),
(12468, 944, NULL, 'Veste polaire', 47, ''),
(12469, 1018, NULL, 'Veste polaire', 21, ''),
(12476, 927, NULL, 'Veste polaire', 67, '');

-- --------------------------------------------------------

--
-- Structure de la table `web_mouvements`
--

CREATE TABLE `web_mouvements` (
  `ref_wmvt` int(11) NOT NULL,
  `refmvt_wmvt` int(11) DEFAULT NULL,
  `refacteur_wmvt` int(11) DEFAULT 1,
  `refcontrat_wmvt` int(11) DEFAULT NULL,
  `refsite_wmvt` int(11) DEFAULT NULL,
  `refdep_wmvt` int(11) DEFAULT NULL,
  `gtype_wmvt` varchar(5) DEFAULT NULL,
  `type_wmvt` varchar(8) DEFAULT NULL,
  `refpiece_wmvt` int(11) DEFAULT 0,
  `intitulepiece_wmvt` varchar(100) DEFAULT NULL,
  `dpiece_wmvt` date DEFAULT NULL,
  `refporteur_wmvt` varchar(100) DEFAULT NULL,
  `refserieetiq_wmvt` int(11) DEFAULT NULL,
  `cbarre_wmvt` varchar(50) DEFAULT NULL,
  `refarticlep_wmvt` int(11) DEFAULT NULL,
  `designarticlep_wmvt` varchar(100) DEFAULT NULL,
  `intitulecond_wmvt` varchar(50) DEFAULT NULL,
  `nbrepiecesparcond_wmvt` int(11) DEFAULT NULL,
  `qtecond_wmvt` int(11) DEFAULT NULL,
  `note_wmvt` varchar(200) DEFAULT NULL,
  `flag_wmvt` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `web_mouvements`
--

INSERT INTO `web_mouvements` (`ref_wmvt`, `refmvt_wmvt`, `refacteur_wmvt`, `refcontrat_wmvt`, `refsite_wmvt`, `refdep_wmvt`, `gtype_wmvt`, `type_wmvt`, `refpiece_wmvt`, `intitulepiece_wmvt`, `dpiece_wmvt`, `refporteur_wmvt`, `refserieetiq_wmvt`, `cbarre_wmvt`, `refarticlep_wmvt`, `designarticlep_wmvt`, `intitulecond_wmvt`, `nbrepiecesparcond_wmvt`, `qtecond_wmvt`, `note_wmvt`, `flag_wmvt`) VALUES
(1, 1, 4, 60, 4, 5, 'TRACA', 'RECEPT', 927, 'BRC200001 2020', '2020-11-04', '2', 2021, '156-00000', 4000, 'Blouse col chemisier', 'unité', 1, 1, NULL, 'A'),
(2, 2, 4, 2, 5, 5, 'TRACA', 'REPAR', 256, 'BRC200001 2021', '2020-11-04', '2', 2020, '156-00001', 4001, 'Blouse col chemisier', 'unité', 1, 1, NULL, 'A'),
(3, 3, 4, 2, 4, 5, 'TRACA', 'LIVRAI', 3211, 'BL20115', '2020-11-11', '2', 111, '156-00002', 565, 'masque', 'pack de 10', 10, 1, NULL, 'A'),
(4, 4, 1, 2, 4, 5, 'TRACA', 'REPAR', 11, 'REP2014458', '2020-11-08', '2', 2021, '156-00003', 4400, 'Blouse col chemisier', 'unité', 2, 1, NULL, 'A'),
(5, 5, 4, 2, 4, 5, 'TRACA', 'REFORM', 7875, 'REF20114', '2020-11-18', '4', 330, '156-445', 4000, 'Blouse col chemisier', 'pack de 10', 3, 1, NULL, 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_passages`
--

CREATE TABLE `web_passages` (
  `ref_passage` int(11) NOT NULL,
  `refacteur_passage` int(11) DEFAULT NULL,
  `refsite_passage` int(11) DEFAULT NULL,
  `site_passage` varchar(20) DEFAULT NULL,
  `datetime_passage` varchar(20) DEFAULT NULL,
  `heure_passage` varchar(20) DEFAULT NULL,
  `livraison_blanch_passage` varchar(30) DEFAULT NULL,
  `livraison_horsblanch_passage` varchar(30) DEFAULT NULL,
  `prochainpassage_passage` varchar(30) DEFAULT NULL,
  `link_passage` varchar(200) DEFAULT NULL,
  `visu_passage` varchar(255) DEFAULT NULL,
  `flag_passage` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_passages`
--

INSERT INTO `web_passages` (`ref_passage`, `refacteur_passage`, `refsite_passage`, `site_passage`, `datetime_passage`, `heure_passage`, `livraison_blanch_passage`, `livraison_horsblanch_passage`, `prochainpassage_passage`, `link_passage`, `visu_passage`, `flag_passage`) VALUES
(1, 4, NULL, 'site 001', '28 juillet 2020', '14h30', '478', '10', '15/08/2020', '#', 'o', 'A'),
(2, 4, NULL, 'site002', NULL, NULL, '45', NULL, '30/08/2020', NULL, 'o', NULL),
(3, 558, NULL, 'site 003', '25 juillet 2020', '08h20', NULL, NULL, NULL, NULL, 'o', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `web_porteurs`
--

CREATE TABLE `web_porteurs` (
  `ref_wdotporteur` int(11) NOT NULL,
  `refsite_wdotporteur` int(11) DEFAULT NULL,
  `codesite_wdotporteur` varchar(50) DEFAULT NULL,
  `refdep_wdotporteur` int(11) DEFAULT NULL,
  `codedep_wdotporteur` varchar(50) DEFAULT NULL,
  `refmetier_wdotporteur` int(11) DEFAULT NULL,
  `metier_wdotporteur` varchar(200) DEFAULT NULL,
  `refporteur_wdotporteur` int(11) DEFAULT NULL,
  `refdotporteur_wdotporteur` int(11) DEFAULT NULL,
  `matricule_wdotporteur` varchar(50) DEFAULT NULL,
  `nomprenom_wdotporteur` varchar(200) DEFAULT NULL,
  `genre_wdotporteur` varchar(10) DEFAULT NULL,
  `article_ref_wdotporteur` int(11) DEFAULT NULL,
  `article_intitule_wdotporteur` varchar(200) DEFAULT NULL,
  `qtepardotation_wdotporteur` int(11) DEFAULT NULL,
  `refgrilletaille_wdotporteur` int(11) DEFAULT NULL,
  `taille_wdotporteur` varchar(10) DEFAULT NULL,
  `etat_wdotporteur` varchar(5) DEFAULT NULL,
  `flag_wdotporteur` varchar(5) DEFAULT NULL,
  `refacteur_wdotporteur` int(11) DEFAULT NULL,
  `refcontrat_wdotporteur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_porteurs`
--

INSERT INTO `web_porteurs` (`ref_wdotporteur`, `refsite_wdotporteur`, `codesite_wdotporteur`, `refdep_wdotporteur`, `codedep_wdotporteur`, `refmetier_wdotporteur`, `metier_wdotporteur`, `refporteur_wdotporteur`, `refdotporteur_wdotporteur`, `matricule_wdotporteur`, `nomprenom_wdotporteur`, `genre_wdotporteur`, `article_ref_wdotporteur`, `article_intitule_wdotporteur`, `qtepardotation_wdotporteur`, `refgrilletaille_wdotporteur`, `taille_wdotporteur`, `etat_wdotporteur`, `flag_wdotporteur`, `refacteur_wdotporteur`, `refcontrat_wdotporteur`) VALUES
(1, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 21, NULL, '00000', 'Rachid Ben Aicha ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'XS', 'AV', 'A', 4, 2),
(2, 24, 'Site Rabat', 38, 'TECH', 12, 'Agent de maintenance', 22, NULL, '0001', 'fatima ZO ', 'f', 111, 'Combinaison  M (Gris)', 3, 2, 'M', 'AV', 'A', 4, 2),
(3, 24, 'Site Rabat', 38, 'TECH', 12, 'Agent de maintenance', 22, NULL, '0001', 'fatima ZO ', 'f', 109, 'Parka imperméable M (Bleu)', 3, 2, '', 'AV', 'A', 4, 2),
(4, 2, 'site Casa', 34, 'QUAL', 8, 'agent de labo', 2, NULL, '00282', 'Abdelmajid Ahaddar ', 'h', 112, 'Blouse de production longue M (Blanc)', 7, 2, 'L', 'AV', 'A', 4, 2),
(5, 2, 'site Casa', 34, 'QUAL', 8, 'agent de labo', 1, NULL, '00315', 'Abdeslam Essalhi ', 'h', 112, 'Blouse de production longue M (Blanc)', 7, 2, 'M', 'AV', 'A', 4, 2),
(6, 24, 'Site Rabat', 38, 'TECH', 12, 'Agent de maintenance', 23, NULL, '0125', 'Simo El Kassimi ', 'h', 111, 'Combinaison  M (Gris)', 3, 99, '4XL', 'AV', 'A', 4, 2),
(7, 24, 'Site Rabat', 38, 'TECH', 12, 'Agent de maintenance', 23, NULL, '0125', 'Simo El Kassimi ', 'h', 109, 'Parka imperméable M (Bleu)', 3, 99, '5XL', 'AV', 'A', 4, 2),
(8, 2, 'site Casa', 35, 'COMPTA', 9, 'Agent administratif', 3, NULL, '02822', 'Abderahmane Jazouli ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'XL', 'AV', 'A', 4, 2),
(9, 2, 'site Casa', 35, 'COMPTA', 9, 'Agent administratif', 4, NULL, '03199', 'Mohamed Nait Sidi Ali ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'L', 'AV', 'A', 4, 2),
(10, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 5, NULL, '03308', 'Mohamed El Alaoui ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'M', 'AV', 'A', 4, 2),
(11, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 6, NULL, '03343', 'Aziz Cherifi ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'L', 'AV', 'A', 4, 2),
(12, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 7, NULL, '03344', 'Lahcen Ennajar ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'L', 'AV', 'A', 4, 2),
(13, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 8, NULL, '03381', 'Mohamed Ait Ouzeroual ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'S', 'AV', 'A', 4, 2),
(14, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 9, NULL, '03391', 'Hicham Essaih ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'XL', 'AV', 'A', 4, 2),
(15, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 11, NULL, '03595', 'Mustapha Amerhoun ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'M', 'AV', 'A', 4, 2),
(16, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 12, NULL, '03610', 'Mohamed El Hajji ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'L', 'AV', 'A', 4, 2),
(17, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 13, NULL, '03724', 'Kamal Faouzi ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 99, '5XL', 'AV', 'A', 4, 2),
(18, 24, 'Site Rabat', 37, 'PROD', 21, 'Agent de production', 14, NULL, '03726', 'Mostafa Kabbali ', 'h', 112, 'Blouse de production longue M (Blanc)', 3, 2, 'M', 'AV', 'A', 4, 2),
(19, 24, 'Site Rabat', 38, 'TECH', 122, 'Electricien', 24, NULL, '8654', 'Fatima El Amri ', 'f', 111, 'Combinaison  M (Gris)', 3, 2, 'S', 'AV', 'A', 4, 2),
(20, 24, 'Site Rabat', 38, 'TECH', 122, 'Electricien', 25, NULL, '96659', 'Khadija Ben moussa ', 'f', 111, 'Combinaison  M (Gris)', 3, 2, 'S', 'AV', 'A', 4, 2),
(21, 24, 'Site Rabat', 39, 'ENTRE', 6, 'Agent d\'entretien', 26, NULL, '9874', 'Ahmed Ziali ', 'h', 111, 'Combinaison  M (Gris)', 3, 2, '2XL', 'AV', 'A', 4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `web_profilsdroitscontact`
--

CREATE TABLE `web_profilsdroitscontact` (
  `ref_wprofildroits` int(11) NOT NULL,
  `numdroit_wprofildroits` int(11) DEFAULT NULL,
  `description_wprofildroits` varchar(100) DEFAULT NULL,
  `myauclair_wprofildroits` varchar(1) DEFAULT NULL,
  `portabilite_wprofildroits` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_profilsdroitscontact`
--

INSERT INTO `web_profilsdroitscontact` (`ref_wprofildroits`, `numdroit_wprofildroits`, `description_wprofildroits`, `myauclair_wprofildroits`, `portabilite_wprofildroits`) VALUES
(1, 1, 'Porteur', 'o', 'o'),
(2, 2, 'Responsable', 'o', 'o'),
(3, 3, 'Direction', 'o', 'o');

-- --------------------------------------------------------

--
-- Structure de la table `web_progress_colors`
--

CREATE TABLE `web_progress_colors` (
  `id` int(11) NOT NULL,
  `id_acteur` int(11) NOT NULL,
  `controlleur` varchar(20) NOT NULL,
  `to_percent` int(11) NOT NULL DEFAULT 50,
  `color_hex` varchar(20) NOT NULL DEFAULT 'w3-green'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `web_progress_colors`
--

INSERT INTO `web_progress_colors` (`id`, `id_acteur`, `controlleur`, `to_percent`, `color_hex`) VALUES
(1, 4, 'avancement_contrat', 50, 'w3-green'),
(2, 4, 'avancement_contrat', 70, 'w3-orange'),
(3, 4, 'avancement_contrat', 100, 'w3-red');

-- --------------------------------------------------------

--
-- Structure de la table `web_receptions`
--

CREATE TABLE `web_receptions` (
  `ref_wreception` int(11) NOT NULL,
  `refbrc_wreception` int(11) DEFAULT NULL,
  `codebrc_wreception` varchar(50) DEFAULT NULL,
  `site_wreception` varchar(100) DEFAULT NULL,
  `totpieces_wreception` int(11) DEFAULT NULL,
  `etatbrc_wreception` varchar(10) DEFAULT NULL,
  `flag_wreception` varchar(5) DEFAULT NULL,
  `refacteur_wreception` int(11) DEFAULT NULL,
  `dbrc_wreception` date DEFAULT NULL,
  `refsite_wreception` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_receptions`
--

INSERT INTO `web_receptions` (`ref_wreception`, `refbrc_wreception`, `codebrc_wreception`, `site_wreception`, `totpieces_wreception`, `etatbrc_wreception`, `flag_wreception`, `refacteur_wreception`, `dbrc_wreception`, `refsite_wreception`) VALUES
(11, 1577, 'BRC20000043', 'LALLA MIMOUNA', 363, 'ENV', 'A', NULL, NULL, NULL),
(561, 1002, 'BRC19000461', 'LALLA MIMOUNA', 432, 'ENV', 'A', NULL, NULL, NULL),
(600, 950, 'BRC19000412', 'GELAS RAIMY', 184, 'ENV', 'A', NULL, NULL, NULL),
(643, 909, 'BRC19000371', 'KCEYBYA', 931, 'ENV', 'A', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `web_receptions_detail`
--

CREATE TABLE `web_receptions_detail` (
  `ref_wdreception` int(11) NOT NULL,
  `refbrc_wdreception` int(11) DEFAULT NULL,
  `designationarticle_wdreception` varchar(200) DEFAULT NULL,
  `flag_wdreception` varchar(5) DEFAULT NULL,
  `qte_wdreception` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_receptions_detail`
--

INSERT INTO `web_receptions_detail` (`ref_wdreception`, `refbrc_wdreception`, `designationarticle_wdreception`, `flag_wdreception`, `qte_wdreception`) VALUES
(647, 1002, 'Blouse col chemisier', '', NULL),
(730, 950, 'Blouse col chemisier', '', NULL),
(2305, 950, 'Blouse kimono', '', NULL),
(2311, 1577, 'Blouse kimono', '', NULL),
(2312, 909, 'Blouse kimono', '', NULL),
(2315, 1002, 'Blouse kimono', '', NULL),
(2606, 1577, 'Blouse MAEL', '', NULL),
(2778, 909, 'Blouse MAEL', '', NULL),
(2849, 1002, 'Blouse SOAN (kimono) couleur', '', NULL),
(2856, 950, 'Blouse SOAN (kimono) couleur', '', NULL),
(2863, 1577, 'Blouse SOAN (kimono) couleur', '', NULL),
(2864, 909, 'Blouse SOAN (kimono) couleur', '', NULL),
(2915, 1002, 'Cagoule passe-montagne', '', NULL),
(2924, 950, 'Cagoule passe-montagne', '', NULL),
(2930, 909, 'Cagoule passe-montagne', '', NULL),
(2940, 1577, 'Cagoule passe-montagne', '', NULL),
(3196, 1002, 'Casquette', '', NULL),
(3198, 1577, 'Casquette', '', NULL),
(3202, 950, 'Casquette', '', NULL),
(4999, 950, 'Gilet SAM', '', NULL),
(8362, 1002, 'Pantalon polaire', '', NULL),
(8364, 950, 'Pantalon polaire', '', NULL),
(8367, 909, 'Pantalon polaire', '', NULL),
(8707, 950, 'Parka imperméable', '', NULL),
(8711, 1577, 'Parka imperméable', '', NULL),
(8713, 909, 'Parka imperméable', '', NULL),
(8714, 1002, 'Parka imperméable', '', NULL),
(12834, 1002, 'Veste polaire', '', NULL),
(12845, 950, 'Veste polaire', '', NULL),
(12847, 1577, 'Veste polaire', '', NULL),
(12849, 909, 'Veste polaire', '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `web_reparationsreformes`
--

CREATE TABLE `web_reparationsreformes` (
  `ref_webrr` int(11) NOT NULL,
  `refrr_webrr` int(11) DEFAULT NULL,
  `refclient_webrr` int(11) DEFAULT NULL,
  `refcontrat_webrr` int(11) DEFAULT NULL,
  `num_webrr` int(11) DEFAULT NULL,
  `codereparationreforme_webrr` varchar(100) DEFAULT NULL,
  `ddemande_webrr` date DEFAULT NULL,
  `originedemande_webrr` varchar(20) NOT NULL DEFAULT 'MYAUCLAIR',
  `refdemandepar_webrr` int(11) DEFAULT NULL,
  `type_webrr` varchar(15) DEFAULT NULL,
  `repar_type_webrr` varchar(20) DEFAULT NULL,
  `refserieetiq_webrr` int(11) DEFAULT NULL,
  `codebarre_webrr` varchar(100) DEFAULT NULL,
  `refporteur_webrr` int(11) DEFAULT NULL,
  `porteur_webrr` varchar(100) DEFAULT NULL,
  `refarticleprojet_webrr` int(11) DEFAULT NULL,
  `photo1_chemin_webrr` varchar(500) DEFAULT NULL,
  `photo2_chemin_webrr` varchar(500) DEFAULT NULL,
  `description_webrr` varchar(500) DEFAULT NULL,
  `reform_newrefserieetiq_webrr` int(11) DEFAULT NULL,
  `dcreation_rr` date DEFAULT NULL,
  `etat_rr` varchar(50) DEFAULT NULL,
  `flag_webrr` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_reparationsreformes`
--

INSERT INTO `web_reparationsreformes` (`ref_webrr`, `refrr_webrr`, `refclient_webrr`, `refcontrat_webrr`, `num_webrr`, `codereparationreforme_webrr`, `ddemande_webrr`, `originedemande_webrr`, `refdemandepar_webrr`, `type_webrr`, `repar_type_webrr`, `refserieetiq_webrr`, `codebarre_webrr`, `refporteur_webrr`, `porteur_webrr`, `refarticleprojet_webrr`, `photo1_chemin_webrr`, `photo2_chemin_webrr`, `description_webrr`, `reform_newrefserieetiq_webrr`, `dcreation_rr`, `etat_rr`, `flag_webrr`) VALUES
(1, 2, 4, 5, 607895652, 'RP00001', '2020-12-16', 'MYAUCLAIR', 4, 'REP', 'Sans déchirure', 2020, '156-00000', 5, 'porteur 1', 105, 'http://localhost:3000/4f291ad4-36a6-476e-b455-a1dca80551ed.jpg', 'http://localhost:3000/a5b1e4e7-2baf-463b-b74d-b90e99b1a59c.jpg', 'signification utilisée à titre provisoire pour calibrer une mise en page..', 1, '2020-12-16', 'Prise en charge', 'A'),
(2, 2, 4, 5, 607895652, 'RP00002', '2020-12-17', 'MYAUCLAIR', 4, 'REP', 'Accessoires', 5, '156-00000', 5, 'porteur 1', 106, '', '', 'signification utilisée à titre provisoire pour calibrer une mise en page.', 1, '2020-12-16', 'Prise en charge', 'o'),
(3, 2, 4, 5, 607895652, 'RP00003', '2020-12-17', 'MYAUCLAIR', 4, 'REF', 'Sans déchirure', 2020, '156-00000', 5, 'porteur 1', 108, '', '', 'signification utilisée à titre provisoire pour calibrer une mise en page.', 1, '2020-12-16', 'Réformé', 'o'),
(4, 2, 4, 5, 607895652, 'RP00004', '2020-12-17', 'MYAUCLAIR', 4, 'REP', 'Déchirure/trou', 5, '116-00000', 5, 'porteur 1', 105, '', '', 'signification utilisée à titre provisoire pour calibrer une mise en page.', 1, '2020-12-16', 'Réformé', 'o'),
(5, 2, 4, 5, 607895652, 'RP00005', '2020-12-17', 'MYAUCLAIR', 4, 'REF', 'Déchirure/trou', 2021, '156-00000', 5, 'porteur 1', 108, '', '', 'signification utilisée à titre provisoire pour calibrer une mise en page.', 6520, '2020-12-16', 'Clôturaé', 'o'),
(17, NULL, NULL, 65, NULL, NULL, '2020-12-19', 'MYAUCLAIR', NULL, 'REP', 'Déchirure/trou', 8388, '156-00000', 2, 'Abdelmajid Ahaddar ', NULL, 'http://localhost:3000/4f291ad4-36a6-476e-b455-a1dca80551ed.jpg', 'http://localhost:3000/a5b1e4e7-2baf-463b-b74d-b90e99b1a59c.jpg', 'lololololololoololoà', NULL, NULL, 'Demande', 'A'),
(18, NULL, NULL, 65, NULL, NULL, '2020-12-19', 'MYAUCLAIR', NULL, 'REP', 'Accessoires', 8388, '156-00000', 2, 'Abdelmajid Ahaddar ', NULL, 'http://localhost:3000/78d5e9b0-c2e1-4ffd-992e-9bd50a2f388d.jpg', 'http://localhost:3000/80f267cf-d9cb-45fa-ac0f-d45b9194d9d2.jpg', 'fddfdfdfddfd', NULL, NULL, 'Demande', 'A'),
(19, NULL, NULL, 65, NULL, NULL, '2020-12-19', 'MYAUCLAIR', NULL, 'REP', 'Accessoires', 8388, '156-00000', 2, 'Abdelmajid Ahaddar ', NULL, 'http://localhost:3000/f508adbe-0db8-4e53-9016-311c083f4d80.jpg', 'http://localhost:3000/18880fc9-d7dc-4113-aa0e-d13f1590b556.jpg', 'dfdfdfd', NULL, NULL, 'Demande', 'A'),
(20, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(21, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(22, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(23, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(24, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(25, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A'),
(26, NULL, NULL, NULL, NULL, NULL, '2020-12-16', 'MYAUCLAIR', NULL, 'Déchirure/trou', NULL, NULL, '156-00000', NULL, NULL, NULL, 'http://localhost:3000/d248f4b5-1e85-4f27-9fb1-eae47ebad632.jpg', 'http://localhost:3000/90b33d19-0710-400a-90ee-abf3b651eb9c.jpg', 'remarques 2020', NULL, NULL, NULL, 'A');

-- --------------------------------------------------------

--
-- Structure de la table `web_users`
--

CREATE TABLE `web_users` (
  `ref_wuser` int(11) NOT NULL,
  `refacteur_wuser` int(11) DEFAULT NULL,
  `intituleacteur_wuser` varchar(100) DEFAULT NULL,
  `refuser_wuser` int(11) DEFAULT NULL,
  `login_wuser` varchar(20) DEFAULT NULL,
  `password_wuser` varchar(20) DEFAULT NULL,
  `nom_wuser` varchar(100) DEFAULT NULL,
  `prenom_wuser` varchar(100) NOT NULL,
  `refsite_wuser` int(11) DEFAULT NULL,
  `refdep_wuser` int(11) NOT NULL,
  `refprofil_wuser` int(11) NOT NULL DEFAULT 1,
  `profil_wuser` varchar(50) DEFAULT NULL,
  `accesespace_wuser` varchar(1) DEFAULT NULL,
  `accesportabilite_wuser` varchar(1) DEFAULT NULL,
  `etat_wuser` varchar(20) NOT NULL,
  `flag_wuser` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `web_users`
--

INSERT INTO `web_users` (`ref_wuser`, `refacteur_wuser`, `intituleacteur_wuser`, `refuser_wuser`, `login_wuser`, `password_wuser`, `nom_wuser`, `prenom_wuser`, `refsite_wuser`, `refdep_wuser`, `refprofil_wuser`, `profil_wuser`, `accesespace_wuser`, `accesportabilite_wuser`, `etat_wuser`, `flag_wuser`) VALUES
(1, 4, 'ROY AGRI MAROC', 12, 's', '', 'SABRI', 'Nora', 5, 9, 1, '', 'o', 'n', 'A', ''),
(2, 4, 'ROY AGRI MAROC', 11, 'o', '', 'OUKASSOU', 'Annasssss', 0, 9, 1, '', 'o', 'o', 'A', ''),
(3, 4, 'ROY AGRI MAROC AnAss', 11, 'Direction', 'Direction', 'OUKASSOU', 'Hassan', 5, 20, 3, '', 'o', 'o', 'A', ''),
(4, 4, 'ROY AGRI MAROC', 4, 'Porteur', 'Porteur', 'Hola', 'lola', 7, 20, 1, '', 'o', 'o', 'A', ''),
(5, 2, 'ROY AGRI MAROC', 4, 'Responsable', 'Responsable', 'LEBON', 'Emmanuel', 7, 9, 3, '', 'o', 'o', 'A', ''),
(6, 4, 'ROY AGRI MAROC AnAss', 201, 'r', '0', 'LABRADO', 'RUBEN', 7, 20, 3, '', 'o', 'o', 'A', ''),
(7, 552, 'HUI.M6', 275, 'j', '1', 'JORIO', 'ZAKARIA', 7, 9, 1, '', 'o', 'o', 'A', ''),
(8, 563, 'MAGHREB STEEL', 280, 'l', '2', 'Ifrah', 'Badreddine', 7, 20, 1, '', 'o', 'o', 'A', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `param_liste_metiers`
--
ALTER TABLE `param_liste_metiers`
  ADD PRIMARY KEY (`ref_metier`);

--
-- Index pour la table `param_liste_tailles`
--
ALTER TABLE `param_liste_tailles`
  ADD PRIMARY KEY (`ref_taille`);

--
-- Index pour la table `web_acteurs`
--
ALTER TABLE `web_acteurs`
  ADD PRIMARY KEY (`ref_wacteur`);

--
-- Index pour la table `web_acteurs_sites`
--
ALTER TABLE `web_acteurs_sites`
  ADD PRIMARY KEY (`ref_wsiteacteur`);

--
-- Index pour la table `web_acteurs_sites_departements`
--
ALTER TABLE `web_acteurs_sites_departements`
  ADD PRIMARY KEY (`ref_wdepsite`);

--
-- Index pour la table `web_articlesprojet`
--
ALTER TABLE `web_articlesprojet`
  ADD PRIMARY KEY (`ref_artpweb`);

--
-- Index pour la table `web_contrats`
--
ALTER TABLE `web_contrats`
  ADD PRIMARY KEY (`ref_wcontrat`);

--
-- Index pour la table `web_facturation`
--
ALTER TABLE `web_facturation`
  ADD PRIMARY KEY (`ref_wfact`);

--
-- Index pour la table `web_infostoday`
--
ALTER TABLE `web_infostoday`
  ADD PRIMARY KEY (`ref_wtoday`);

--
-- Index pour la table `web_livraisons`
--
ALTER TABLE `web_livraisons`
  ADD PRIMARY KEY (`ref_wlivraison`);

--
-- Index pour la table `web_livraisons_detail`
--
ALTER TABLE `web_livraisons_detail`
  ADD PRIMARY KEY (`ref_wdlivraison`);

--
-- Index pour la table `web_mouvements`
--
ALTER TABLE `web_mouvements`
  ADD PRIMARY KEY (`ref_wmvt`);

--
-- Index pour la table `web_passages`
--
ALTER TABLE `web_passages`
  ADD PRIMARY KEY (`ref_passage`);

--
-- Index pour la table `web_porteurs`
--
ALTER TABLE `web_porteurs`
  ADD PRIMARY KEY (`ref_wdotporteur`);

--
-- Index pour la table `web_profilsdroitscontact`
--
ALTER TABLE `web_profilsdroitscontact`
  ADD PRIMARY KEY (`ref_wprofildroits`);

--
-- Index pour la table `web_progress_colors`
--
ALTER TABLE `web_progress_colors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `web_receptions`
--
ALTER TABLE `web_receptions`
  ADD PRIMARY KEY (`ref_wreception`);

--
-- Index pour la table `web_receptions_detail`
--
ALTER TABLE `web_receptions_detail`
  ADD PRIMARY KEY (`ref_wdreception`);

--
-- Index pour la table `web_reparationsreformes`
--
ALTER TABLE `web_reparationsreformes`
  ADD PRIMARY KEY (`ref_webrr`);

--
-- Index pour la table `web_users`
--
ALTER TABLE `web_users`
  ADD PRIMARY KEY (`ref_wuser`),
  ADD UNIQUE KEY `IDX_077c92e4809676aaf205c3178c` (`login_wuser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `param_liste_metiers`
--
ALTER TABLE `param_liste_metiers`
  MODIFY `ref_metier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT pour la table `param_liste_tailles`
--
ALTER TABLE `param_liste_tailles`
  MODIFY `ref_taille` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `web_acteurs`
--
ALTER TABLE `web_acteurs`
  MODIFY `ref_wacteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT pour la table `web_acteurs_sites`
--
ALTER TABLE `web_acteurs_sites`
  MODIFY `ref_wsiteacteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `web_acteurs_sites_departements`
--
ALTER TABLE `web_acteurs_sites_departements`
  MODIFY `ref_wdepsite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `web_articlesprojet`
--
ALTER TABLE `web_articlesprojet`
  MODIFY `ref_artpweb` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `web_contrats`
--
ALTER TABLE `web_contrats`
  MODIFY `ref_wcontrat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT pour la table `web_facturation`
--
ALTER TABLE `web_facturation`
  MODIFY `ref_wfact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=466;

--
-- AUTO_INCREMENT pour la table `web_infostoday`
--
ALTER TABLE `web_infostoday`
  MODIFY `ref_wtoday` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `web_livraisons`
--
ALTER TABLE `web_livraisons`
  MODIFY `ref_wlivraison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=574;

--
-- AUTO_INCREMENT pour la table `web_livraisons_detail`
--
ALTER TABLE `web_livraisons_detail`
  MODIFY `ref_wdlivraison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12477;

--
-- AUTO_INCREMENT pour la table `web_mouvements`
--
ALTER TABLE `web_mouvements`
  MODIFY `ref_wmvt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `web_passages`
--
ALTER TABLE `web_passages`
  MODIFY `ref_passage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `web_porteurs`
--
ALTER TABLE `web_porteurs`
  MODIFY `ref_wdotporteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `web_profilsdroitscontact`
--
ALTER TABLE `web_profilsdroitscontact`
  MODIFY `ref_wprofildroits` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `web_progress_colors`
--
ALTER TABLE `web_progress_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `web_receptions`
--
ALTER TABLE `web_receptions`
  MODIFY `ref_wreception` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=644;

--
-- AUTO_INCREMENT pour la table `web_receptions_detail`
--
ALTER TABLE `web_receptions_detail`
  MODIFY `ref_wdreception` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12850;

--
-- AUTO_INCREMENT pour la table `web_reparationsreformes`
--
ALTER TABLE `web_reparationsreformes`
  MODIFY `ref_webrr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `web_users`
--
ALTER TABLE `web_users`
  MODIFY `ref_wuser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
