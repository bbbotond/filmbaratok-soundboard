import { Component } from '@angular/core';
import { SoundObject } from './components/sound-object/sound-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  soundObjects: SoundObject[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const soundCollection = this.getSoundCollection().sort((a: any, b: any) => {
      return a.Desc.localeCompare(b.Desc, 'hu');
    });

    this.soundObjects = soundCollection.map((soundEl: any) => {
      return new SoundObject(soundEl.Author, soundEl.Audio, soundEl.Desc)
    });
  }

  private getSoundCollection(): { Desc: string, Author: string, Audio: string }[] {
    return [
      { "Desc": "Babe vs Star Wars", "Author": "All", "Audio": "all_babevssw" },
      { "Desc": "George Lucas", "Author": "All", "Audio": "all_georgelucas" },
      { "Desc": "Kobralalala", "Author": "All", "Audio": "all_kobralalala" },
      { "Desc": "Koporshow", "Author": "All", "Audio": "all_koporshow" },
      { "Desc": "Scatman", "Author": "All", "Audio": "all_scatman" },
      { "Desc": "Tűzgyűrű", "Author": "Anna", "Audio": "anna_tuzgyuru" },
      { "Desc": "Aaa", "Author": "Blacksheep", "Audio": "blacksheep_aaa" },
      { "Desc": "Dudikoff", "Author": "Blacksheep", "Audio": "blacksheep_dudikoff" },
      { "Desc": "Ez olyan mint a Szent Hegy", "Author": "Blacksheep", "Audio": "blacksheep_ezolyanmintaszenthegy" },
      { "Desc": "Francia", "Author": "Blacksheep", "Audio": "blacksheep_francia" },
      { "Desc": "Kokain", "Author": "Blacksheep", "Audio": "blacksheep_kokain" },
      { "Desc": "Kutya", "Author": "Blacksheep", "Audio": "blacksheep_kutya" },
      { "Desc": "Mi a f***** nézünk", "Author": "Blacksheep", "Audio": "blacksheep_miafasztnezunk" },
      { "Desc": "Miausical", "Author": "Blacksheep", "Audio": "blacksheep_miausical" },
      { "Desc": "Moziélmény", "Author": "Blacksheep", "Audio": "blacksheep_mozielmeny" },
      { "Desc": "Naneeee", "Author": "Blacksheep", "Audio": "blacksheep_naneeee" },
      { "Desc": "Odab*****", "Author": "Blacksheep", "Audio": "blacksheep_odabaszok" },
      { "Desc": "Úgy vonyítottam...", "Author": "Blacksheep", "Audio": "blacksheep_ugyvonyitottammintegykibaszotthiena" },
      { "Desc": "21 bridges monológ", "Author": "Freddy", "Audio": "freddy_21bridgesmonolog" },
      { "Desc": "Aerosmith", "Author": "Freddy", "Audio": "freddy_aerosmith" },
      { "Desc": "American Ninja", "Author": "Freddy", "Audio": "freddy_americanninja" },
      { "Desc": "Az a duda", "Author": "Freddy", "Audio": "freddy_azaduda" },
      { "Desc": "Bumchikibumbum", "Author": "Freddy", "Audio": "freddy_bumchikibumbum" },
      { "Desc": "Dünyayı Kurtaran Adam", "Author": "Freddy", "Audio": "freddy_dunyayikurtaranadam" },
      { "Desc": "Egy német film", "Author": "Freddy", "Audio": "freddy_egynemetfilm" },
      { "Desc": "Köszönöm szépen", "Author": "Freddy", "Audio": "freddy_koszonomszepen" },
      { "Desc": "Meg kellett néznem az IMDB-n", "Author": "Freddy", "Audio": "freddy_megkellettneznemimdbn" },
      { "Desc": "Ringat a víz", "Author": "Freddy", "Audio": "freddy_ringataviz" },
      { "Desc": "Shalom yal", "Author": "Freddy", "Audio": "freddy_shalomyal" },
      { "Desc": "Sakababa", "Author": "Freddy", "Audio": "freddy_skabadaba" },
      { "Desc": "Szívás", "Author": "Freddy", "Audio": "freddy_szivas" },
      { "Desc": "Terminátor", "Author": "Freddy", "Audio": "freddy_terminator" },
      { "Desc": "Trololo", "Author": "Freddy", "Audio": "freddy_trololo" },
      { "Desc": "Wonder Woman", "Author": "Freddy", "Audio": "freddy_wonderwoman" },
      { "Desc": "YMCA", "Author": "Freddy", "Audio": "freddy_ymca" },
      { "Desc": "Arr", "Author": "Gergo", "Audio": "gergo_arr" },
      { "Desc": "Big f***** Gun", "Author": "Gergo", "Audio": "gergo_bigfuckinggun" },
      { "Desc": "Én ezt nem igényelem", "Author": "Gergo", "Audio": "gergo_eneztnemigenylem" },
      { "Desc": "Je", "Author": "Gergo", "Audio": "gergo_je" },
      { "Desc": "Kiss me Daddy", "Author": "Gergo", "Audio": "gergo_kissmedaddy" },
      { "Desc": "Lobotomia", "Author": "Gergo", "Audio": "gergo_lobotomia" },
      { "Desc": "Ma is tanultam valamit", "Author": "Gergo", "Audio": "gergo_maistanultamvalamit" },
      { "Desc": "Majdnem meg kellett...", "Author": "Gergo", "Audio": "gergo_majdnemmegkellett" },
      { "Desc": "Nevetés", "Author": "Gergo", "Audio": "gergo_nevetes" },
      { "Desc": "Nincs itt Anya", "Author": "Gergo", "Audio": "gergo_nincsittanya" },
      { "Desc": "Ő legalább nem úgy néz ki....", "Author": "Gergo", "Audio": "gergo_olegalabbnemugynezki" },
      { "Desc": "Ott szárnyalt a film", "Author": "Gergo", "Audio": "gergo_ottszarnyaltafilm" },
      { "Desc": "Szkript", "Author": "Gergo", "Audio": "gergo_szkript" },
      { "Desc": "Van benne szex?", "Author": "Gergo", "Audio": "gergo_vanbenneszex" },
      { "Desc": "Zokni", "Author": "Gergo", "Audio": "gergo_zokni" },
      { "Desc": "David Lynch és Rottweiler", "Author": "Sorter", "Audio": "sorter_davidlynchesarottweiler" },
      { "Desc": "Haverok harca", "Author": "Sorter", "Audio": "sorter_haverokharca" },
      { "Desc": "Hiányzik Steve James", "Author": "Sorter", "Audio": "sorter_hianyzikstevejames" },
      { "Desc": "Nevetés", "Author": "Sorter", "Audio": "sorter_nevetes" },
      { "Desc": "Papaya", "Author": "Sorter", "Audio": "sorter_papaya" },
      { "Desc": "Kúp", "Author": "Zoly", "Audio": "zoly_kup" },
      { "Desc": "Kielégíthető", "Author": "Freddy", "Audio": "freddy_kielegitheto" },
      { "Desc": "Höhö szex", "Author": "Sorter", "Audio": "sorter_hohoszex" },
      { "Desc": "Elfogadom", "Author": "Blacksheep", "Audio": "blacksheep_elfogadom" },
      /* 1.1 */
      { "Desc": "Ballonkabát", "Author": "All", "Audio": "all_ballonkabat" },
      { "Desc": "Aktus", "Author": "Blacksheep", "Audio": "blacksheep_aktus" },
      { "Desc": "Szexjelenetek", "Author": "Blacksheep", "Audio": "blacksheep_szexjelenetek" },
      { "Desc": "Wookiee Goldberg", "Author": "Blacksheep", "Audio": "blacksheep_wookiegoldberg" },
      { "Desc": "Aaaaa", "Author": "Freddy", "Audio": "freddy_aaaaa" },
      { "Desc": "Babe vs Star Wars 2", "Author": "Freddy", "Audio": "freddy_babe2sw" },
      { "Desc": "Grand Hotel", "Author": "Freddy", "Audio": "freddy_grandhotel" },
      { "Desc": "Holiday Road", "Author": "Freddy", "Audio": "freddy_holidayroad" },
      { "Desc": "Minecraft Lurdy", "Author": "Freddy", "Audio": "freddy_minecraftlurdy" },
      { "Desc": "Utolsó csepp", "Author": "Freddy", "Audio": "freddy_utolsocsepp" },
      { "Desc": "A világ összes segge letagadna", "Author": "Gergo", "Audio": "gergo_avilagosszesseggeletagadna" },
      { "Desc": "Merénylet a szabadidőd ellen", "Author": "Gergo", "Audio": "gergo_merenyletaszabadidodellen" },
      { "Desc": "Mindehol csak seggeket látok", "Author": "Gergo", "Audio": "gergo_mindenholseggeketlatok" },
      { "Desc": "Oscar bácsi", "Author": "Gergo", "Audio": "gergo_oscarbacsi" },
      { "Desc": "Vesekő", "Author": "Gergo", "Audio": "gergo_veseko" },
      { "Desc": "Black panther", "Author": "Zoly", "Audio": "zoly_blackpanther" },
      /* 1.2 */
      { "Desc": "Bagetten táplált mosoly", "Author": "All", "Audio": "all_bagettentaplaltmosoly" },
      { "Desc": "Csirke", "Author": "All", "Audio": "all_csirke" },
      { "Desc": "Ötödik hullám", "Author": "All", "Audio": "all_otodikhullam" },
      { "Desc": "Titanicolas Cage", "Author": "All", "Audio": "all_titanicolascage" },
      { "Desc": "Itt van Blacksheep", "Author": "Blacksheep", "Audio": "blacksheep_ittvanblacksheep" },
      { "Desc": "Srác és a BKV ellenőr Kate Winslet", "Author": "Blacksheep", "Audio": "blacksheep_srackatewinslet" },
      { "Desc": "Üvegben lévő szar", "Author": "Blacksheep", "Audio": "blacksheep_uvegbenlevoszar" },
      { "Desc": "Dynamite", "Author": "All", "Audio": "dynamite" },
      { "Desc": "Grease", "Author": "Freddy", "Audio": "freddy_grease" },
      { "Desc": "Károly", "Author": "Freddy", "Audio": "freddy_karoly" },
      { "Desc": "WTF", "Author": "Freddy", "Audio": "freddy_wtf" },
      { "Desc": "Zoly mellkasfétis", "Author": "Freddy", "Audio": "freddy_zolymellkasfetis" },
      { "Desc": "Gyorsnak lenni", "Author": "Gergo", "Audio": "gergo_gyorsnaklenni" },
      { "Desc": "Nem lepődök meg", "Author": "Gergo", "Audio": "gergo_nemlepodokmeg" },
      { "Desc": "Wonder Woman láthatatlan autó", "Author": "Gergo", "Audio": "gergo_wwlathatatlanauto" },
      { "Desc": "Fűrész", "Author": "Sorter", "Audio": "sorter_furesz" },
      { "Desc": "Hé seggfej!", "Author": "Sorter", "Audio": "sorter_heseggfej" },
      { "Desc": "Idegfasz", "Author": "Sorter", "Audio": "sorter_idegfasz" },
    ]
  }
}