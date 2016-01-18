/*
 * This utility created with intend to convert date to word format, specially useful 
 * where we need to display date in words like Date of Birth, date of driving license or issuance of document.
 * 
 * Since script have been developed only for couple of scenarios, thats why only year 1900-2099 range has been considered for now.  
 * 
 * Sample : Input : 01/02/2004 (in dd/mm/yyyy format)
 * it will return output as First February two thousand four.
 * 
 * @To Do
 * -> Add Validations.
 * -> Add separators.
 * -> Add more word connectors.
 * -> Add more date formatters.
 * -> Add more input formats.
 * 
 * @author Shashank Sundriyal
 * @Org http://visualthinkers.in
 * 
 *         ======================================================================
 *
 *         Released under http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in
 *         writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 *         CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing
 *         permissions and limitations under the License.
 *         ====================================================================
 *
 */

function dateToWord(dateToParse) {
	var monthNames = [ "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December" ];
	var data = dateToParse.split("/");
	var dateInWords = "";
	switch (data[0]) {
	case "01":
		dateInWords += "First";
		break;
	case "02":
		dateInWords += "Second";
		break;
	case "03":
		dateInWords += "Third";
		break;
	case "04":
		dateInWords += "Fourth";
		break;
	case "05":
		dateInWords += "Fifth";
		break;
	case "06":
		dateInWords += "Sixth";
		break;
	case "07":
		dateInWords += "Seventh";
		break;
	case "08":
		dateInWords += "Eighth";
		break;
	case "09":
		dateInWords += "Ninth";
		break;
	case "10":
		dateInWords += "Tenth";
		break;
	case "11":
		dateInWords += "Eleventh";
		break;
	case "12":
		dateInWords += "Twelfth";
		break;
	case "13":
		dateInWords += "Thirteenth";
		break;
	case "14":
		dateInWords += "Fourteenth";
		break;
	case "15":
		dateInWords += "Fifteenth";
		break;
	case "16":
		dateInWords += "Sixteenth";
		break;
	case "17":
		dateInWords += "Seventeenth";
		break;
	case "18":
		dateInWords += "Eighteenth";
		break;
	case "19":
		dateInWords += "Nineteenth";
		break;
	case "20":
		dateInWords += "Twenth";
		break;
	case "21":
		dateInWords += "Twenty first";
		break;
	case "22":
		dateInWords += "Twenty second";
		break;
	case "23":
		dateInWords += "Twenty third";
		break;
	case "24":
		dateInWords += "Twenty fourth";
		break;
	case "25":
		dateInWords += "Twenty fifth";
		break;
	case "26":
		dateInWords += "Twenty sixth";
		break;
	case "27":
		dateInWords += "Twenty seventh";
		break;
	case "28":
		dateInWords += "Twenty eighth";
		break;
	case "29":
		dateInWords += "Twenty Ninth";
		break;
	case "30":
		dateInWords += "Thirth";
		break;
	case "31":
		dateInWords += "Thirty first";
		break;
	}

	dateInWords += " ";
	// Now append Month.
	month = parseInt(data[1]) - 1; // Array index is 0 while input date month
	// starts from 01
	dateInWords += monthNames[month] + " ";

	// Now Append year.
	dateInWords += hundrethPlace(data[2]) + " " + tenthPlace(data[2]);
	return dateInWords;
}

function hundrethPlace(yearVal) {
	String
	yearStart = yearVal.substring(0, 2);
	switch (yearStart) {
	case "19":
		return "Nineteen Hundred";
	case "20":
		return "Two Thousand";
	}
}

function tenthPlace(yearVal) {
	yearTenthPlace = yearVal.substring(2, 3);
	console.log("tenthPlace "+yearTenthPlace);
	switch (yearTenthPlace) {
	case "0":
		return  unitPlace(yearVal);
	case "1":
		return tenthPlaceWithTen(yearVal);
	case "2":
		return "Twenty " + unitPlace(yearVal);
	case "3":
		return "Thirty " + unitPlace(yearVal);
	case "4":
		return "Forty " + unitPlace(yearVal);
	case "5":
		return "Fifty " + unitPlace(yearVal);
	case "6":
		return "Sixty " + unitPlace(yearVal);
	case "7":
		return "Seventy " + unitPlace(yearVal);
	case "8":
		return "Eighty " + unitPlace(yearVal);
	case "9":
		return "Ninety " + unitPlace(yearVal);
	}
}

function tenthPlaceWithTen(yearVal) {
	var tenthPlace = yearVal.substring(2, 4);
	console.log("tenthPlaceWithTen with ten "+tenthPlace);
	switch (tenthPlace) {
	case "10":
		return "Ten";
	case "11":
		return "Eleven";
	case "12":
		return "Twelve";
	case "13":
		return "Thirteen";
	case "14":
		return "Fourteen";
	case "15":
		return "Fifteen";
	case "16":
		return "Sixteen";
	case "17":
		return "Seventeenth";
	case "18":
		return "Eighteen";
	case "19":
		return "Nineteen";
		break;
	}
}

function unitPlace(yearVal) {
	yearUnitPlace = yearVal.substring(3, 4);
	console.log("unitPlace (yearVal) "+yearUnitPlace);
	switch (yearUnitPlace) {
	case "0":
		return "";
	case "1":
		return "one";
	case "2":
		return "two"
	case "3":
		return "three";
	case "4":
		return "four";
	case "5":
		return "five"
	case "6":
		return "six";
	case "7":
		return "seven";
	case "8":
		return "eight";
	case "9":
		return "nine";
	}

}