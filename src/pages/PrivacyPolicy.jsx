import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-12">Klauzula informacyjna</h1>
        
        <div className="space-y-12 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Kto jest Administratorem Twoich danych osobowych?</h2>
            <p>
              Administratorem Twoich danych osobowych jest SelectCentre Spółka z ograniczoną odpowiedzialnością z siedzibą w Warszawie (ul. Wiertnicza 89, 02-952 Warszawa), wpisana pod numerem KRS: 0000763236 do rejestru przedsiębiorców KRS, prowadzonego przez Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy KRS, NIP: 6793178172.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Jak się z nami skontaktować?</h2>
            <p>
              Możesz napisać do nas maila na adres: <a href="mailto:kontakt@selectcentre.pl" className="text-navy font-medium hover:underline">kontakt@selectcentre.pl</a>, skontaktować się poprzez formularz kontaktowy lub pisemnie na adres wskazany powyżej. Możesz też skontaktować się bezpośrednio z powołanym przez nas Inspektorem Ochrony Danych pisemnie na adres wskazany powyżej lub elektronicznie na adres e-mail: <a href="mailto:iodo@selectcentre.pl" className="text-navy font-medium hover:underline">iodo@selectcentre.pl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">W jakim celu przetwarzamy Twoje dane, na jakiej podstawie prawnej?</h2>
            <p className="mb-4">
              Twoje dane osobowe przetwarzane będą w celu kontaktowania się z Tobą i przedstawienia Ci oferty marketingowej podmiotów trzecich – na podstawie Twojej zgody (art. 6 ust. 1 lit. a) RODO) oraz w celu ustalenia, dochodzenia lub obrony roszczeń związanych z prowadzoną działalnością gospodarczą (cele dowodowe) – podstawą prawną jest nasz prawnie uzasadniony interes polegający m.in. na ochronie przed ewentualnymi roszczeniami – art. 6 ust. 1 lit. f) RODO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Jak długo przetwarzamy Twoje dane?</h2>
            <p>
              Twoje dane będą przetwarzane do czasu wycofania przez Ciebie zgody na kontakt marketingowy, a w zakresie przetwarzania danych na podstawie prawnie uzasadnionego interesu – do czasu jego realizacji (tj. w razie powstania sporu – do czasu przedawnienia roszczeń).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Jakie kategorie danych przetwarzamy i skąd je mamy?</h2>
            <p>
              Przetwarzamy Twoje dane identyfikacyjne: imię i nazwisko oraz dane kontaktowe: numer telefonu oraz adres e-mail. Możemy przetwarzać również inne dane, które nam przekazujesz w toku kontaktu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Komu udostępniamy Twoje dane?</h2>
            <p className="mb-4">
              Twoje dane możemy udostępnić podmiotom, które świadczą na naszą rzecz różnego rodzaju usługi, np. podmiotom świadczącym usługi call center, usługi IT, dostawcom rozwiązań informatycznych, kancelariom prawnym, doradcom podatkowym, podmiotom świadczącym dla nas usługi archiwizacji lub przechowywania dokumentów, itp., jednakże wyłącznie w zakresie niezbędnym do realizacji ww. celów przetwarzania.
            </p>
            <p className="mb-4">
              W sytuacjach określonych w przepisach prawa, Twoje dane możemy udostępnić na rzecz uprawnionych podmiotów (sądy, organy podatkowe, organy ścigania, itp.).
            </p>
            <p>
              W przypadku uzyskania Twojej zgody lub w razie chęci skorzystania z usług lub produktów naszych partnerów, dane możemy udostępnić tym partnerom, którzy świadczą usługi lub sprzedają produkty, będące przedmiotem przedstawianej Ci oferty. Do partnerów tych należą m.in.: MedicCentre sp. z o.o. (KRS: 0000660624), Poliseo sp. z o.o. (KRS: 0000957657), MedicCentre Service Sp. z o.o. (KRS: 0000972666), GetMed sp. z o.o. (KRS: 0001097171), PanWybierak.pl Sp. z o.o. (KRS: 0000481546), Flawless Sp. z o.o. (KRS: 0000632128).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Jakie są Twoje prawa?</h2>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Masz prawo poprosić o dostęp do swoich danych osobowych, jak również żądać ich sprostowania, usunięcia lub ograniczenia ich przetwarzania.</li>
              <li>Jeśli przetwarzamy Twoje dane w oparciu o nasz prawnie uzasadniony interes – masz prawo do wniesienia sprzeciwu wobec przetwarzania Twoich danych osobowych.</li>
              <li>Jeśli przetwarzamy Twoje dane w oparciu o Twoją zgodę – masz prawo do jej wycofania w dowolnym momencie. Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania do czasu jej wycofania.</li>
              <li>Masz też prawo wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych, Urząd Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).</li>
            </ul>
            <p>
              Swoje prawa możesz zrealizować kontaktując się z nami za pośrednictwem kanałów wskazanych w tej klauzuli.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Czy podanie danych jest konieczne?</h2>
            <p>
              Podanie danych jest dobrowolne. Brak podania danych uniemożliwi nam kontakt z Tobą w celach marketingowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Czy przetwarzamy Twoje dane w sposób zautomatyzowany?</h2>
            <p>
              W celu dostosowania przedstawianych przez nas ofert do preferencji Klientów, jak również w celu dostosowania treści, jakie od nas otrzymujesz, Twoje dane mogą podlegać profilowaniu, jednakże nie wywołuje to względem Ciebie skutków prawnych ani nie wpływa to na Ciebie w podobny sposób.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
