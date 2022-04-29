#!/usr/bin/env bash
dstMainScript="/usr/local/bin/fixtureGenerator"
fixtureGeneratorDir=$(cd $(dirname ${BASH_SOURCE}) && pwd)

function createGlobalLink {
    sudo sh -c "echo '#!/usr/bin/env bash' > ${2}"
    sudo sh -c "echo 'export FIXTURE_GENERATOR_DIR=\"${fixtureGeneratorDir}\"' >> ${2}"
    sudo sh -c "echo '${fixtureGeneratorDir}/${1} \$@' >> ${2}"
    sudo chmod +x ${2}
}

createGlobalLink "main.js" "${dstMainScript}"
