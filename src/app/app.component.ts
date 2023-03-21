import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products!: Product[];

  ngOnInit() {
    this.products = [
      new Product(
        "Lamborghini huracan",
        "Supercar italienne avec un V10 de 630cv",
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_m.jpg",
        234000,
        0,
        false,
        ["rouge", "orange", "blanc", "noir", "gris", "bleu"]
      ),

      new Product(
        "Lykan hypersport",
        "6 cylindres à plat de 3,7 L de 770cv",
        "data:image/jpeg;base64,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",
        3400000,
        0,
        false,
        ["noir", "blanc", "gris"]),

      new Product(
        "Ferrari LaFerrari",
        "V12 6,3 L + électrique de 963cv",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAwwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAEMQAAIBAwMCAgYHBAcIAwAAAAECAwAEEQUSITFBBlETImFxgZEUIzJCUqGxM3LB0QcVVJKy4fAlNENigoOi8SREY//EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAOBEAAgECBAMDCgUEAwAAAAAAAAECAxEEEiExBRNBUWFxFCIygZGhscHh8BUzUlPRBiNC8SQ0Yv/aAAwDAQACEQMRAD8A2cPt59tAGPNADYUAxGeaAl3AoA6DBoCp8X3up6dpgutMaJVVvriy5ZQeAVzx19lYaznGN4nT4VSwtWvy8R121svWZ7RPFmpi6QXk/wBIhcDcrIoPvBArDRrTk7Nnax3CcMoPlxyv1/Nm7jnjmXdGwOOo7g+2ttNM8rOEoO0jzHmpKHM0BJRzQB0oA6j1aA6BQHu9AV+s6rBpNsZZvWY/YjBwXP8AL21WTsjYw2HlXnliYy38ealLfpbjT7eYyNtREYhvdnmtRYmTlax6GpwLDwpOo6jVu230N+MlQXXa2BkA5wffW6eXfdsDfpQgUlGSaAVk4FAV0n2vW4NAV94dq486AqZHXeeaA1sVAEzzz5UBFm4Az0oDk91DaQmad9qL8yfIe2olJRV2ZaNGdaahBamTv/El5JfoYCIoEYMqD7/7x/hWo60pTVj09Hg9CnQefWTW/Z4FufGNssOFtZfTgcgkBfn1/KsjxC2tqaUOAVZS1msvv9hmvEOtXepW5W5cCLn6tOFqqquRuy4dSw8fMXrKzSJSRFubcygDPnjvWCnpM6M25UFfcs73VJrN2nhlkErH1QrEbj2zWa0pVMsTSrzpUcK5VEn3d49YeMr+G3AuY47oouWbO1m/LFb/ACzxzndtmv0jVYdTgV09ViM7c5+VUasEWi1BIdOtAHXgUBSeIPFOn6DEzXG+WQZ9SIDjHHNWUWyMxkdY/pEvSB/V9h9HiBy8khDPj2Dt59DSUHbQzYeVJVU6qvHqVct/Nfxme4nad8ZDsc8ezyFaKk7anr+TTg0qStHuGfBIjXxE1w4BMaFUXqSzdx8M/OsdC3NuZOJKU8JlXb8DS3/jSLTtUktJrYyQpwWQ+sD+hrYdezsciHAnWoqpCVm+j2F9Z8ZwSWLDSDKJyVO90xs5GevX9KSrpxeUrhuCVI1V5RbL3O/+iWjeJRfBIr9Vim+yJEGEb+RpSr5tGVx/BpUb1KOsezqv5RaTNjpWwcIrZZCJD3zQCl2SeeDQFLJgO3B60BsohxQEj391ARK0BT+Klxp0bd1mX9DWGv6J1uDO2Ia7mYfXJHhtzJGxVuACO3NaL0Z62OsGgemSNJapvOTjGfnVUzNFeag13+wYHoRVk7Mw14ZoimlOQSB/rv8AwqzdpGGl51Ow/ch57iNlUttUtgDPU4/QVvYZrWTOBxtTk404q6SbZGFgrYGM9q3Tzpb6BdSW8P1DbXgbC+xew+RArDMsj6Lp9yl5aQ3EYwsi5x+E9CD7Qcj4VQsPR0BW+LtcTw74bvdTYBnjTbEp+9I3Cj5/xoD5TqzvJNYW08jSMAjyM3ViF3En3tgn31n7jGCmCksTyAOlWB7TmKWckRP2GIHu6iudiFlm+89bwipzcMk/8dPV0G9NmkhnE0RIYMeR2rRUrSPQ5IzpWkQu5vSTyM2WO77R70bu7hLLZIqtVuGjeHYSFzuOD7qXKvTc0VnyhFWWxWZuFP8A8eLn/hr+ldKOyPn1f82Xi/iIyH1mqxiFLsjaaApnkG48LQGyiOBQHXOBnNACluAqgKfWNAVniGT0uknceVdTWKt6B0uFP/lRXj8DD+IBusTjtj9a0J7nsIbMW01tlsn7v8TWO5tJeahiSTcpBqbkOOgjYExzNnsc1eT2NShF+dEPday+n6vbzRZ9AyFfc1ZIwzQv2M08RX5OIjSntJe9M9DeNePJcbQu6Q8KMDzro4eblDU8vxOlCGIeTZljpF1FHdusrqiynaNzAZbHSrzNFG68H3JU3dk5+yRLH7QeG/MA/wDXWMsauI0B8k/p21gtc6fo0bHZGhupgO5OVQfDDflQFM9ytzcQXIOVaLgjnnA/lWdMx2DWmo2trcMl4u4vGQhboG/9ZrVxVRpZYna4Rhqc5OpU2VhbR7gXVtPKF2gsMe3tmtatdKNzscMnTqSqunGyuWWnOVjlYdVP5HitO+rO9FXihV3GcDtRCW5W6scxrjsf51KMc15tzVWIPoxnrVlsVmbUf7unP3APyrpx2R89rfmS8X8RByCxwasYxK/5iPnigKUwgnO5qA2QkwKAhLKCoxySaAXY4I5z7M0AprW06XLgtnK/4hWOr6DN7hjti4ffQzN9CJIdrjKnINc+W57Sm+hUtE1oqxscr0U+dY2bcWlFI7kkVBcGg2znyIq19DXtao+8DqiR+i2SDOUyvnkEVv4WzjI81x+bjWpTW9n8hlGgtbfbECsSdMmtyKUVZHnKk5VJZpPUWvPCninWFSa10xxbj14zJIiFie4DHNVbuQkb3wi97FqNnFqdvJbXjRsskbjBOFOSPMZA6VUk+hxUB8H8e2Wq+If6QtVh02xnujbskP1ScKoUdT0HJNAL2+g+ItBt2bU9KnjtA24SDDCMnzweBVoysQ0Q1eNLi2EqkqyKTuHORilSClqbGHxE6N0uofRisMUsS/ZCgDmtPF6OJ3uAXcanivmWFvMIomz98EVodT1cY3p+Apu569akow1tYm9k3N+xRgzE98dqkrJq1i+th86sYKhsJF3W6heu0fpXTjsj5/V/Ml4v4lf9n1e+fOrGMV1D1YSaApsj8YoDTel4xQAy/PWgJHnnNAL6qP8AZs2ewB/MVSp6DNvAO2Jh4lBcD6r3Gue9z2tLcTZVkUowBPtqjNsVvLeO3WKRZBiRiojb7QIGflijhpdEKqlPI93sKOyoNzHAziqotOyVyt1mbLwxodz7tpx7wf4VvYTqjy/9QNNU32X99v4IXGqvDOhiI9MpDDKhgh7HB4Pxreep5ksrjxbrAtdz6jdPK/AHpNg+SgUskQrjmneIL+OMSSTNJMRy7sxYDyznNXSVtSrbuWK+L9V/tL/B3/nTJEXYC68Rak6vLDO8dwR+0RiCw8jz0o4q2wuxCDxlr0kLNFqNwsicOr7ZFI9oZf41TKi+pSR37zSyiVEDPklVG1fgO3upsA2i3KYlhkbbIpC898ZrRxS2PTcBmkqnfb5lkZA8ClDkZPNaL3PV05f2xrT7A3CCeV8Q5IwDy2P0q1jE6i1SLrhYhHGAqr0UURSKe7C2/GDVjHUNHJJ9QmT90fpXTjsjwFb8yXi/iCSWIpycEd/OpMZW6ncIIWxy3bFAULXxYkt1oC6i1KJ+jDPlQDSTAjNAGWSgBavJjSbpsZ2xFj8OapP0WbODko4iEn0aPn+sa/eNcS2WmafcNLF+1LQsxXgdh299YI4e+sjt1+NRpvLQV32v+DN/1pql1vYXjKFwSFIXr7qvy6cehpQxuOxDbVS1vUeS6vHlheW6aT0TZG85x51E1GzVtzNRliXVhOVS+V/79xpLV4ruLdKkhhBAlWPG7GRnGeM+VaDVj1LqOpTeXf5jXjSDRoNMtbrQhiX0jCWJi5Kg/ZJ3d+uccVnwDkm1N3fq+XzPK8Rhi+Q/KFs1Z+0w6yFCT9qRuST5107nBGrffK4kmPAqdyNixWTjrVyCYkPmaXAVZD1zS5AldwyQSm6tycdwO3wqrT3Rddgu06XJDMno5BzuQ8GovcWNL4LsNK1OO+bXLj6MYSoUrIE3nnJHqtnjHArnY1tWt9/A7PDJ4iFN8iGZt9/Z3ArwQ2qOIDIbdXIjaRcMwzxkdq1Em3qexhNworPuUSarqlsrRwXEaRl2YDGSMnpW+oQlujzEsRjabllkkm2/aEXxJq9oEdpYZEbON6fyxTk05aIrLiuOopOTTT7v9Gm0rxIZXhh1GxuLSWXmNjG2x/dkZrHPDyjqtTcocapVmo1FlfuNlc3iBY1DZwgIx34rcjsjzFb82Xi/iVVxqJUKARknpjpUmMo729eYYPY0AkZG8zQEorraRtkyfZQFjbapKhHrZFAPpq74A2+80A1bavltrAYoAzausbH0ZGSevn7aA+deIdGu5dcml0u1kkiuAZCsY4U/eHz5+NVm0l5xnoQqzllpK7EX0PXYRltMu8YzxET+lY81N9TdVLGw1y/D+RIXV5DKr7mjeJ+m3GGHmKsqUbaGKeOxKmszs49NjQ6i91qWmqbCzmmyQZREhb0Z8uKwUKeSbbOrxTGvEYWEIK+bV91vv3GcuIbm1/3uzuID/wDrGU/Wty6PNtNbjsUcxUfUTDj8FZEyrQxHFLjOyT4qam5FgyI/dH/uGl0RYOisD0Yf9JpcWYzGfxA4HP2TU3J2KWNZJ7iU2ltNOu8/sYi/f2VibRkUXLZFrY291Yh/p1lcQRv64aSMqDjt8q08THPZo9FwSv5OpwqKy3v8v4KPUNQuWu5yJhLGXwuM7R5bQelZOTG1uw0ZcTxHMk0736b+w4mnavcgNFpt24PQrbvz+VWSjExSq4qpqojGnaFqFxqdvb3lncpFvHpd8ZAC9SM+4Yqys9jVrKqmlUufS7+9uZOFQ4HTjpVjCVcsk7j1gw2jHTrQCcgmPUN18qAXeInJIagBbG/CaAr4SfOgHImx97FANRygCgDC8A6DNAdN6KAa8K3Ed7q06TAuTHMIeSNrKhYYx+6fnWCnaVbzjs1M1LAxdN2ejdvX9C7tdaa3maIucKcAk8kVr1m6VRxO1gFHG4aM3utH4/Xcr/Euk2esXcF80DylnCzJHwX9+PMd6jmyWqLy4dQqrLV0a2fd2F5ayReHJo7aNP8AZx5ixyYj5E96vmyvU1Fh1NaK0viXT6kjpyQyke8GrOZVYbozKatp2nI7TJaRbXbJAXGCaxzqzWzNvD8Pw09JU1fwK76Np/8AZY/lWPyifabf4RhP217D30bT/wCyxfKp8pqdpH4RhP217Dv0aw/ssfyqPKanaPwjCftoe0ywsZJBKLSHEbZHq9T2rJGrNrVmpVwGHhO0IJWNLFe+jGd2AvfOKtnKyodiFJJE1mSS3cH+rxzIB/xD5D/XFVu6j7ieUsMr2vL4FJ4b0bT7PUptRksViKsRFG2TtPmM+VZMzS1NXyenOfmLXqzRXuucBA5Bc7eDzjvU03nnYpjaccNQc3vsvH71KrVHjgZ0RSu2GNm/fKqxP/lUNqFeyMcKcq/DHOo7vVq/cUr3xI4Oa2zzwnLdMe5FALPO3maAXkuG/EaAXNy2ftGgEY2oA6y4oAgn8zQHjNx6poCDTGgC+EtSFjrMVyyekEcu4p+Icgj4gkVqt5J5j0NKn5Rh+Unq/j095cz2GoXlw8+nyiZFIECBQC6+2tydKNWOuxxcNi6+CqeY8slun8H93HNIuriKVluY2hlQ7WXPWuVVpujOx7bA42PEMO55bNOz8bX07i6e4SeIxygMD2zTOZHQERK9mdm4tCT6vsqt7bF1C++5yWdZkZGJKsMZz+dRmTLqk1tuUdzL9ElMNwWVhgjkYIPQj2VdYepJXSuadTi+GpScKk2n99xEXsR6SN8xU+S1f0lPxvBfuffsOrdrK2yEs7nsCKPDVErtEw4thqslCnO7ZpbRltrdYwenJPme9UvY2+W3uReV7h9m7bGOvtqL3LZVDbccjulhj2JhQB0FZFOxgdC71Ka/vblbl/QxtO7ALHGDwTVoRdaeU1cTVjw+i6lrtuy+pDT7DVlvFutVcQwc+mRl5jQdcZ6cV0I04046HkMRi6uKqXm7vov4RLWNU+lzXMypsEzlgvkOw+AArmuWatfvParC8jhuSW+V+3d+8pBPxXSPBo4Zs0JBs9ABdgaAAcZoBVSBQHi3lQEhmgJZNASKnbu7Y7mgKy2dkUSxHDgdPOteSTdmdejOULSiaG08URqNs0UsTdyhGD7cdKwxjUh6EjsvE4PE/wDYp69tv41JtrdvJMZPTlt3QsoB93AFVqRqT1kbuBq4HDqUKbsm79fmNw6pG32JAfjWu6ckdWMqU/RkmMfTg67S3HtqPOLOimcE47OPjUWZPLaLK3u0uLIwyhGe39aMsM5QnkfA4+dZYzeU1KuGXNU7aS38QiRb4HuFtVMKHDPtGAew/MVbNK1zBKFGNRU3bM+gFmVnxEFTb1IGM1DqPI12l1h4qalbY5l+mDWE2rIIgkIAX8qtZlWooMLaYrlshfNvVqcpidWCB+n0+0DSTajah+yiUMfyzWWm3B3TNPFqlXiqdWN4+z5oq7/xJZbDFG0l0c5AxtTP+vZVpTqPdmOisJQkuVFJ92/tKw3ExV5nPrbTx2ANYYemkbWLbeGqSl2P4CofFdY+do76ShJEy0AFpKAF6SgAqDQBVB8qAZhiz2oBpYh5UAnqIwQPIUBSWkqiNcntWCW506LvBM9Ow2k1RbmaTsriZZ89ePKthRTOdOrJPcJGZCMh8VPLRCxFRdQ0d5dR/Zlb5mqOjFm3T4piae0mHTV7xT6zbqxvDxN6H9Q4uO7uNW/iGeJwzKD8Mfxqjw3YbcP6kqPScUy2g8SYjI2S+jPLKr+qfeOlYXSktLnRXFqM/wC5y9bb6fHck/jGKNNtrYb26l5nzz7hirrDPqc+rx6F/NTFJfGOotwkFtH7kz+pNZFhV2mpPjtR+jETl8SazN/9x4x5RnZ/hxV1h4o1J8XxEuwRnuLuZN81xI5/5iTWRUYLoa0uIYiW8hX00vVnJo4IpHETb1Ze6asYRXAyfOtCtJ3seu4dTpqmprcdu5NtpJzyRj5mqUFeojNxSeTB1H3HCOtdU8CQagBmgAvQA6A4JDjvQBI3J55oByFwOuaAYNxGg5NAJ3dwkwwEwfxUBn1TC+qc4/I96pKJs0ayirMhJuxjBqsYmapVTWjPCJyAdpwehPesqa2NaVKo/OtoGjhZeODx51YxuLXQhxioII4FCLo4VyDQD+ngHTbkN2iOK1Kn5kfE9BgmvIKz/wDIkq+2ts4BLAoQSBXHWgD/AEeU26tsOGGQfZUk2bEzGwJTacjyGaq2i8YTeqRZaQ+UKnjB4ya069KUndI9DwvHUqdNxqSsP3YV4lRmIyy49vNTQouLvIx8W4nSr0+VT17xkits88QYUAu4oADg0AH1qAaCCgJBPKgCBG9tAGSMMNrDigOyadlCyN2zg0BRyadcBixUZPXaaXJswZs7gdVf5ZoNiPo7qPO3eB7ARmocU+heFWpD0ZNHvTXYPQHHZkH8qo6cTOsdXXW/qO/SJurWtu3vUj9CKjlLozKuI1P8oxfq+p0XAP2tPU/uyEVHKf6i64hTe9Je1khPb/e0+T4S/wCVRy5/qLeW4Z70vf8AQYhvreOF4xp0m1uD9Z/lVXRk3fMbFPiuHpwcFSdn3/QGJ7QfZ02U/wDd/wAqtkn+oweW4b9n3/Q99ITtpmP3pT/Kp5b/AFEfiFJbUfeznp5s/Vafbge3ex/Wp5fayn4jL/GmvY38yQk1AjAt4lz+GID+FTy4FHj8Q9rLwRIpqUg2kcdwWOD8BirKMOiMNTE4iS86T+/YSW21ADAaOMH8IFTexgWaWxKHS5BMs085Zl6ZzS6EoyW5aDCjAyffUlSDHNABegF3oCHFAOAUAVEzQBVjoA0ajPSgGlHqkUAI2/lUGWLIm29lA7Mg0WM+VCmZrYCygZ4X4ilkTzJEMr0KIfhSxPNZ0Rox/ZJ/dqMpPNfYS+joOkSf3aZSec+wnHEgBJij4/5RVXHUzQrtJtoltH3UUe5anIivlUuxHjuHTA+FMiKvEz7iBkfzqcqKOvMlu49tTlRV1ZvqCkJPc1JDk3uyCjFVaMkZ22JGiQlNtakSasYSJPFABagAuKAhigHY+poBhaAKtAFTrQB0oAi1DLIkagsLz96kqJMfVNSVAH7VAMxUAYd6A4elQWWxxOtSVOSUAE0B40ANutAeWhKOmhJE0Kgz0oCDUAJ6AHQH/9k=",
        1250000,
        0,
        false,
        ["rouge", "gris", "noir", "bleu"])
    ]
  }

}
