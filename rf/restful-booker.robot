*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    JSONLibrary
Library    os

# https://restful-booker.herokuapp.com/auth
# https://restful-booker.herokuapp.com/booking
# https://restful-booker.herokuapp.com/booking/1

*** Variables ***
${BASE_URL}     https://restful-booker.herokuapp.com
${ENDPOINT_POST}     /auth
${ENDPOINT_POST1}    /booking
${ENDPOINT_DEL}      /booking/1

*** Test Cases ***
TC1: Authorization Booking
    ${BODY}     load json from file    resource/post_body.json
    ${HEADER}     create dictionary    Content-Type=application/json
    log to console      ${BODY}
    create session    Booker    ${BASE_URL}
    ${RESPONSE}     post on session    Booker   ${ENDPOINT_POST}     json=${BODY}    headers=${HEADER}
    ${STATUS_CODE}      convert to string    ${RESPONSE.status_code}
    should be equal    ${STATUS_CODE}   200
    ${RESPONSE_BODY}    convert to string    ${RESPONSE.content}
    log to console    ${RESPONSE_BODY}
    ${MY_JSON}   convert string to json   ${RESPONSE_BODY}
    ${VALUE}    get value from json    ${MY_JSON}   $.token
    log to console    ${VALUE}

TC2: Create Booking
    ${BODY}     load json from file    resource/create_book.json
    ${HEADER}     create dictionary    Content-Type=application/json    Accept=application/json
    log to console      ${BODY}
    create session    Booker    ${BASE_URL}
    ${RESPONSE}     post on session    Booker   ${ENDPOINT_POST1}     json=${BODY}    headers=${HEADER}
    ${STATUS_CODE}      convert to string    ${RESPONSE.status_code}
    should be equal    ${STATUS_CODE}   200
    ${RESPONSE_BODY}    convert to string    ${RESPONSE.content}
    log to console    ${RESPONSE_BODY}
    ${MY_JSON}   convert string to json   ${RESPONSE_BODY}
    ${VALUE}    get value from json    ${MY_JSON}   $.bookingid
    log to console    ${VALUE}

#TC3: DeleteBooking
    #${PARAMS}   create dictionary    id=bookingid=$.bookingid
    #${HEADER}   create dictionary    cookie=token=$.token    Content-Type=application/json
    #log to console      ${PARAMS}
    #create session    Booker    ${BASE_URL}
    #${RESPONSE}     post on session    Booker   ${ENDPOINT_DEL}     data=${PARAMS}    headers=${HEADER}
    #${STATUS_CODE}      convert to string    ${RESPONSE.status_code}
    #should be equal    ${STATUS_CODE}   201
    #${RESPONSE_BODY}    convert to string    ${RESPONSE.content}
    #log to console    ${RESPONSE_BODY}
