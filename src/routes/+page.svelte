<script language="ts">
    import rimbaultTransparent from '$lib/images/rimbault-transparent.png';
    import affichePdf from '$lib/images/affiche.pdf';
    import afficheSansTexte from '$lib/images/affiche-sanstexte.png';
    import logoSmall from '$lib/images/logo-small.png';
</script>

<div class="container">
    <div class="img-header text-center flex justify-center">
        <img src={rimbaultTransparent} alt="Portrait de Louis Rimbault"/>
    </div>
    <h1 class="frankie text-center text-8xl mt-10 mb-10 font-bold">L'autre terre libérée</h1>
    <div class="events">
        <div class="event text-center">
            <div class="date">27 juin 2023 — 19h</div>
            <div class="description">
                <p>
                    <a href="https://cafeshistoriques.com/programme/la-rencontre-de-louis-rimbault-et-des-causeries-anarchistes" target="_blank">A la rencontre de Louis Rimbault</a>
                </p>
                <p>Conférence d'<a href="https://fr.wikipedia.org/wiki/Anne_Steiner" target="_blank">Anne Steiner</a>, sociologue, spécialiste du mouvement individualiste anarchiste</p>
                <p>en partenariat avec le <a href="https://rdv-histoire.com" target="_blank">Centre Européen de la Promotion de l'Histoire</a></p>
                <p>dans le cadre des <a href="https://cafeshistoriques.com/" target="_blank">Cafés historiques en région Centre-Val de Loire</a></p>
            </div>
            <div class="lieu">
                <p><a href="https://www.openstreetmap.org/?mlat=47.38562&mlon=0.55435#map=19/47.38562/0.55435" target="_blank">Halles de Luynes</a></p>
            </div>
        </div>
        <div class="event text-center">
            <div class="date">2 juillet 2023</div>
            <div class="description">
                <p>Champ Libres, à la découverte de Terre Libérée</p>
                <p>Balade sonore — Pique-nique partagé</p>
                <p>Fresque du climat — Causeries en plein air</p>
            </div>
            <div class="lieu">
                <p><a href="https://www.openstreetmap.org/?mlat=47.39772&mlon=0.53513#map=18/47.39772/0.53513" target="_blank">Terrain l'autre terre libérée</a></p>
            </div>
        </div>
    </div>

    <div class="affiche-wrapper flex justify-center">
        <a href={affichePdf} target="_blank">
            <img src={afficheSansTexte} class="affiche" alt="Affiche de l'événement Champ Libre à Luynes"/>
        </a>
    </div>

    <div class="body">
        <div class="inner">
            <p>
                <strong>L’Autre Terre Libérée</strong> est une joyeuse association citoyenne qui a pour vocation de valoriser l’histoire passée d’une expérience communautaire, végétarienne et anarchiste réalisée sur territoire luynois (37) entre 1923 et 1949. L’expérience, dont la mémoire
                locale a fait table rase, était une école de pratique végétalienne, elle se nommait <strong>Terre Libérée</strong> et son initiateur se nommait <a href="https://fr.wikipedia.org/wiki/Louis_Rimbault" target="_blank"><strong>Louis Rimbault</strong></a>.
            </p>
            <p>
                Au-delà d’un devoir de mémoire, l’association a pour vocation d’organiser des moments de partage et de convivialité, de promouvoir la transition écologique et le vivre ensemble, le tout dans une démarche coopérative. L’essence même de cette initiative locale réside dans la
                volonté de créer du lien et vient questionner le sens de “faire communauté” aujourd’hui.
            </p>
            <p>
                L’expérience communautaire <strong>Terre Libérée</strong> s’est déroulée sur les hauteurs de Luynes, rue des pins. La ferme est encore visible mais appartient à des privés. Une parcelle de 2500m2, jouxtant l’expérience a été donnée en gestion à l’association. Sur cette
                prairie boisée, l’association a pour objectif de laisser en permanence un jardin offert aux promeneurs.
            </p>
            <p>
                Dans cet espace en accès libre, l’association raconte sur des ardoises gravées ce morceau de patrimoine disparu des mémoires collectives. Ce jardin se trouvant sur un parcours de promenade, du mobilier de plein air va être réalisé par les membres de l’association (en cours de
                réalisation) et proposé aux promeneurs afin qu’ils puissent s’y arrêter faire un pique nique. Nous prévoyons une promenade identifiée (en accord avec la mairie) depuis les halles de Luynes.
            </p>
            <p>C’est dans ce cadre que les adhérents de L’autre terre libérée ont décidé d’organiser le premier événement de l’association le <strong>mardi 27 juin</strong> et le <strong>dimanche 2 juillet 2023</strong> sur la commune de Luynes.</p>
        </div>
    </div>
    <div class="footer text-center">
        <img src={rimbaultTransparent} alt="Portrait pochoir de Louis Rimbault"/>
        <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes"/>
    </div>
    <div class="liens">
        <a href="/mentions-legales">Mentions légales</a>
    </div>
</div>