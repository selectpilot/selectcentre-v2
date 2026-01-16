import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-12">REGULAMIN STRONY INTERNETOWEJ I ŚWIADCZENIA USŁUG SELECTCENTRE</h1>
        
        <div className="space-y-12 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§1. Postanowienia ogólne</h2>
            <div className="space-y-4">
              <p>Niniejszy Regulamin określa zasady korzystania ze serwisu internetowego dostępnego pod adresem selectcentre.pl oraz zasady świadczenia usług przez firmę SelectCentre Sp. z o.o.</p>
              <p>Właścicielem serwisu i podmiotem świadczącym usługi jest: SelectCentre Spółka z ograniczoną odpowiedzialnością z siedzibą w Warszawie, ul. Wiertnicza 89, 02-952 Warszawa, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: 0000763236, NIP: 6793178172, REGON: [Uzupełnić jeśli jest].</p>
              <p>Regulamin skierowany jest do wszystkich użytkowników serwisu, przy czym postanowienia dotyczące zakupu baz danych i usług AI (Usługi B2B) dotyczą wyłącznie przedsiębiorców w rozumieniu art. 43(1) Kodeksu cywilnego.</p>
              <p>Kontakt z Administratorem możliwy jest za pośrednictwem adresu e-mail: <a href="mailto:kontakt@selectcentre.pl" className="text-navy font-medium hover:underline">kontakt@selectcentre.pl</a> lub pisemnie na adres siedziby firmy.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§2. Definicje</h2>
            <div className="space-y-4">
              <p>Użyte w Regulaminie pojęcia oznaczają:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Usługodawca / SelectCentre</strong> – SelectCentre Sp. z o.o.</li>
                <li><strong>Klient (Biznesowy)</strong> – osoba fizyczna prowadząca działalność gospodarczą, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która zamawia usługi związane z bazami danych lub AI w celach związanych bezpośrednio z jej działalnością gospodarczą.</li>
                <li><strong>Użytkownik</strong> – każda osoba korzystająca ze strony internetowej (w tym konsumenci sprawdzający status swoich danych).</li>
                <li><strong>Usługa</strong> – usługi świadczone przez SelectCentre, w tym: udostępnianie baz danych, enrichment danych, analityka biznesowa oraz rozwiązania AI.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§3. Rodzaje i zakres usług</h2>
            <div className="space-y-4">
              <p>Za pośrednictwem serwisu SelectCentre świadczy usługi w dwóch obszarach:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>a) Dla Biznesu:</strong> sprzedaż i aktualizacja baz danych B2B/B2C, kampanie e-mailingowe, dedykowane rozwiązania AI.</li>
                <li><strong>b) Dla Konsumenta (Strefa Konsumenta):</strong> udostępnianie informacji o administratorze danych, obsługa procesów weryfikacji i usuwania danych (Opt-out).</li>
              </ul>
              <p>Informacje zamieszczone na stronie w części "Dla Biznesu" nie stanowią oferty w rozumieniu Kodeksu Cywilnego, a jedynie zaproszenie do zawarcia umowy.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§4. Zasady realizacji zleceń (Usługi B2B)</h2>
            <div className="space-y-4">
              <p>Usługi w zakresie sprzedaży i udostępniania baz danych realizowane są na podstawie indywidualnych ustaleń z Klientem.</p>
              <p>Proces zawarcia umowy przebiega następująco:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Klient przesyła zapytanie (specyfikację grupy docelowej) drogą mailową lub przez formularz.</li>
                <li>SelectCentre przygotowuje wycenę i przesyła ją drogą elektroniczną.</li>
                <li>Akceptacja oferty przez Klienta jest równoznaczna z zawarciem Umowy i akceptacją niniejszego Regulaminu.</li>
              </ol>
              <p>Warunkiem przystąpienia do realizacji zlecenia przez SelectCentre jest opłacenie przez Klienta Faktury Proforma w wysokości 100% wartości zamówienia, chyba że strony w odrębnej umowie postanowiły inaczej.</p>
              <p>Termin realizacji zlecenia ustalany jest indywidualnie. Gotowe bazy danych przekazywane są Klientowi w formie bezpiecznego pliku elektronicznego (np. .xlsx, .csv, zabezpieczony ZIP) na wskazany adres e-mail.</p>
              <p>SelectCentre nie ponosi odpowiedzialności za opóźnienia wynikające z przyczyn niezależnych (np. awarie systemów bankowych, działanie siły wyższej).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§5. Płatności</h2>
            <div className="space-y-4">
              <p>Ceny usług są cenami netto i zostaną powiększone o należny podatek VAT zgodnie z obowiązującymi przepisami.</p>
              <p>Płatności dokonywane są przelewem tradycyjnym na rachunek bankowy SelectCentre wskazany na Fakturze Proforma.</p>
              <p>Za dzień zapłaty uznaje się dzień uznania środków na rachunku bankowym Usługodawcy.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§6. Licencja i zasady wykorzystania danych (Dla Klientów B2B)</h2>
            <div className="space-y-4">
              <p>Klient nabywa prawo do wykorzystania zakupionej bazy danych wyłącznie na własny użytek wewnętrzny związany z prowadzoną działalnością (licencja niewyłączna).</p>
              <p>Zakazane jest:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>a) Odsprzedawanie bazy danych osobom trzecim.</li>
                <li>b) Publikowanie danych w ogólnodostępnych rejestrach internetowych.</li>
                <li>c) Przekazywanie danych podmiotom konkurencyjnym wobec SelectCentre.</li>
              </ul>
              <p>Klient zobowiązuje się do przetwarzania pozyskanych danych zgodnie z obowiązującymi przepisami prawa, w tym RODO oraz Ustawą o świadczeniu usług drogą elektroniczną. Od momentu przekazania bazy, to Klient staje się Administratorem Danych Osobowych w niej zawartych.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§7. Procedura reklamacyjna (Dotyczy baz danych)</h2>
            <div className="space-y-4">
              <p>SelectCentre dokłada najwyższej staranności, aby dostarczane dane były aktualne i zweryfikowane (np. w oparciu o rejestry CEIDG/GUS).</p>
              <p>Ze względu na dynamiczny charakter danych, Klient ma prawo zgłosić reklamację w terminie 7 dni roboczych od dnia otrzymania bazy danych.</p>
              <p>Reklamacja powinna zawierać wskazanie błędnych rekordów oraz uzasadnienie. Zgłoszenia należy kierować na adres e-mail: <a href="mailto:kontakt@selectcentre.pl" className="text-navy font-medium hover:underline">kontakt@selectcentre.pl</a>.</p>
              <p>SelectCentre rozpatrzy reklamację w terminie 14 dni. W przypadku uznania reklamacji, SelectCentre zobowiązuje się do wymiany błędnych rekordów na nowe lub zwrotu proporcjonalnej części wynagrodzenia.</p>
              <p>Reklamacji nie podlegają rekordy, które utraciły aktualność po dacie wygenerowania bazy dla Klienta.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§8. Strefa Konsumenta i Ochrona Danych</h2>
            <div className="space-y-4">
              <p>Użytkownik korzystający z formularzy dostępnych w "Strefie Konsumenta" (np. formularz wypisu/sprzeciwu) zobowiązany jest do podawania wyłącznie własnych, prawdziwych danych.</p>
              <p>SelectCentre zastrzega sobie prawo do weryfikacji tożsamości osoby składającej wniosek o usunięcie danych, aby zapobiec nieuprawnionemu usuwaniu danych osób trzecich lub firm konkurencyjnych.</p>
              <p>Szczegółowe zasady przetwarzania danych osobowych oraz prawa użytkowników opisane są w Polityce Prywatności.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§9. Odpowiedzialność</h2>
            <div className="space-y-4">
              <p>Odpowiedzialność SelectCentre względem Klienta (przedsiębiorcy) z tytułu niewykonania lub nienależytego wykonania umowy ograniczona jest do wysokości wynagrodzenia zapłaconego za dane zlecenie.</p>
              <p>SelectCentre nie ponosi odpowiedzialności za korzyści utracone przez Klienta ani za skutki biznesowe wykorzystania dostarczonych baz danych (np. niską konwersję z kampanii marketingowej).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">§10. Postanowienia końcowe</h2>
            <div className="space-y-4">
              <p>W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy Kodeksu cywilnego, RODO oraz inne właściwe przepisy prawa polskiego.</p>
              <p>Sądem właściwym do rozstrzygania ewentualnych sporów jest sąd właściwy dla siedziby SelectCentre Sp. z o.o. (Warszawa).</p>
              <p>Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
